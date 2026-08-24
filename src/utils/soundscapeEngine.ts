/**
 * Web Audio API Cinematic Soundtrack Engine - Inspired by Hans Zimmer's "Interstellar"
 * 
 * Features:
 * - Sacred Church Pipe Organ multi-register synthesis (16', 8', 4', 2' stops with celestial detune)
 * - "Day One" & "First Step" Harmonic Progression (Am -> F -> C -> G / Dm emotional cycle)
 * - "Time Dilation" Relentless Clock Tick & Ostinato Arpeggiator (64 BPM tempo-synced)
 * - Deep 32.7Hz - 55Hz Gravitational Sub-Bass Pedal
 * - Procedural Cosmic Wind & Space Diffusion Texture
 * - Auto-start on first user gesture with global interaction listener
 * - Interactive acoustic haptics and real-time FFT Analyser
 */

export type SoundscapeMode = 'interstellar' | 'sentimental' | 'deep-sub' | 'celestial';

interface SoundscapeState {
  isPlaying: boolean;
  mode: SoundscapeMode;
  volume: number; // 0.0 to 1.0
  interactiveFxEnabled: boolean;
  tempo: number; // BPM for Interstellar arpeggiator
  currentChordName: string;
}

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let analyserNode: AnalyserNode | null = null;
let spaceFilter: BiquadFilterNode | null = null;
let reverbDelay: DelayNode | null = null;
let reverbGain: GainNode | null = null;

// Organ voice nodes
let organOscillators: { osc: OscillatorNode; gain: GainNode; pan?: StereoPannerNode }[] = [];
let bassOscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
let noiseSource: AudioBufferSourceNode | null = null;
let noiseGain: GainNode | null = null;

// Arpeggio & Clock Tick Scheduler
let arpeggioTimer: number | null = null;
let chordCycleTimer: number | null = null;
let clockTickTimer: number | null = null;
let currentChordIndex = 0;
let arpeggioStep = 0;

let state: SoundscapeState = {
  isPlaying: false,
  mode: 'interstellar',
  volume: 0.75,
  interactiveFxEnabled: true,
  tempo: 66,
  currentChordName: 'A Minor [Primary]'
};

const listeners: ((state: SoundscapeState) => void)[] = [];

function notifyListeners() {
  listeners.forEach(fn => fn({ ...state }));
}

export function subscribeSoundscape(fn: (state: SoundscapeState) => void) {
  listeners.push(fn);
  fn({ ...state });
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

/**
 * Get or initialize the AudioContext safely
 */
export function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Interstellar Chord Progression Matrix (A minor -> F major -> C major -> G / E minor)
 * Notes expressed in Hz for sacred pipe organ stops
 */
interface InterstellarChord {
  name: string;
  subRoot: number; // Sub-bass pedal (C1-A1)
  root: number;    // Bass pedal (A1-D2)
  notes: number[]; // Organ chord triad/seventh notes (Hz)
  arpNotes: number[]; // High arpeggio notes (Hz)
}

const INTERSTELLAR_CHORDS: InterstellarChord[] = [
  {
    name: 'A Minor (Day One)',
    subRoot: 55.00, // A1
    root: 110.00,   // A2
    notes: [220.00, 261.63, 329.63, 440.00, 523.25], // A3, C4, E4, A4, C5
    arpNotes: [440.00, 523.25, 659.25, 880.00, 659.25, 523.25] // A4, C5, E5, A5, E5, C5
  },
  {
    name: 'F Major (First Step)',
    subRoot: 43.65, // F1
    root: 87.31,    // F2
    notes: [174.61, 220.00, 261.63, 349.23, 440.00, 523.25], // F3, A3, C4, F4, A4, C5
    arpNotes: [349.23, 440.00, 523.25, 698.46, 523.25, 440.00] // F4, A4, C5, F5, C5, A4
  },
  {
    name: 'C Major (Stay)',
    subRoot: 32.70, // C1 (Deep Sub)
    root: 65.41,    // C2
    notes: [130.81, 164.81, 196.00, 261.63, 329.63, 392.00], // C3, E3, G3, C4, E4, G4
    arpNotes: [261.63, 329.63, 392.00, 523.25, 659.25, 392.00] // C4, E4, G4, C5, E5, G4
  },
  {
    name: 'G Major / E Minor (No Time For Caution)',
    subRoot: 49.00, // G1
    root: 98.00,    // G2
    notes: [196.00, 246.94, 293.66, 392.00, 493.88, 587.33], // G3, B3, D4, G4, B4, D5
    arpNotes: [392.00, 493.88, 587.33, 783.99, 587.33, 493.88] // G4, B4, D5, G5, D5, B4
  },
  {
    name: 'D Minor (Cornfield Horizon)',
    subRoot: 36.71, // D1
    root: 73.42,    // D2
    notes: [146.83, 174.61, 220.00, 293.66, 349.23, 440.00], // D3, F3, A3, D4, F4, A4
    arpNotes: [293.66, 349.23, 440.00, 587.33, 440.00, 349.23] // D4, F4, A4, D5, A4, F4
  }
];

/**
 * Generate a smooth pink/brown noise buffer for the cosmic atmospheric wind texture
 */
function createAtmosphericNoiseBuffer(ctx: AudioContext, durationSeconds: number = 4): AudioBuffer {
  const bufferSize = ctx.sampleRate * durationSeconds;
  const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
  
  for (let channel = 0; channel < 2; channel++) {
    const output = buffer.getChannelData(channel);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
      b6 = white * 0.115926;
    }
  }
  return buffer;
}

/**
 * Play a single subtle acoustic "Time Dilation Clock Tick" (Hans Zimmer pendulum)
 */
function playClockTick(ctx: AudioContext) {
  if (!state.isPlaying || state.mode !== 'interstellar') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(4.0, now);

    // Woodblock / watch second hand transient
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.035);

    const tickVol = 0.035 * state.volume;
    gain.gain.setValueAtTime(tickVol, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(filter);
    filter.connect(gain);
    if (masterGain) {
      gain.connect(masterGain);
    }

    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {
    // ignore
  }
}

/**
 * Play an arpeggiated organ / bell note in the Interstellar sequence
 */
function playArpeggioNote(ctx: AudioContext, freq: number, isAccent: boolean = false) {
  if (!state.isPlaying || !masterGain || state.mode !== 'interstellar') return;

  try {
    const now = ctx.currentTime;
    
    // Main chime oscillator
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    
    // Harmonic pipe register (octave shimmer)
    const harmonicOsc = ctx.createOscillator();
    const harmonicGain = ctx.createGain();

    const panNode = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const panPos = Math.sin(now * 2) * 0.45;
    if (panNode) panNode.pan.setValueAtTime(panPos, now);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    harmonicOsc.type = 'triangle';
    harmonicOsc.frequency.setValueAtTime(freq * 2, now);

    const baseVol = (isAccent ? 0.06 : 0.035) * state.volume;
    const noteDuration = 0.65;

    oscGain.gain.setValueAtTime(0.0001, now);
    oscGain.gain.exponentialRampToValueAtTime(baseVol, now + 0.03);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

    harmonicGain.gain.setValueAtTime(0.0001, now);
    harmonicGain.gain.exponentialRampToValueAtTime(baseVol * 0.25, now + 0.02);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration * 0.7);

    osc.connect(oscGain);
    harmonicOsc.connect(harmonicGain);

    if (panNode) {
      oscGain.connect(panNode);
      harmonicGain.connect(panNode);
      if (reverbDelay) {
        panNode.connect(reverbDelay);
      }
      if (spaceFilter) {
        panNode.connect(spaceFilter);
      }
    } else {
      if (spaceFilter) {
        oscGain.connect(spaceFilter);
        harmonicGain.connect(spaceFilter);
      }
    }

    osc.start(now);
    harmonicOsc.start(now);
    osc.stop(now + noteDuration + 0.1);
    harmonicOsc.stop(now + noteDuration + 0.1);
  } catch (e) {
    // ignore
  }
}

/**
 * Apply the church pipe organ chord with swelling harmonics
 */
function applyInterstellarChord(ctx: AudioContext, chord: InterstellarChord) {
  if (!spaceFilter || !state.isPlaying) return;

  state.currentChordName = chord.name;
  notifyListeners();

  const now = ctx.currentTime;
  const transitionTime = 3.5;

  // Clear previous organ voices gracefully
  organOscillators.forEach(({ osc, gain }) => {
    try {
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
      setTimeout(() => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      }, 2100);
    } catch (e) {}
  });
  organOscillators = [];

  // 1. Build Sub & Bass Pedal Drone (The Gravitational Anchor)
  bassOscillators.forEach(({ osc, gain }) => {
    try {
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
      setTimeout(() => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      }, 2100);
    } catch (e) {}
  });
  bassOscillators = [];

  // Deep Sub (Sine)
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  subOsc.type = 'sine';
  subOsc.frequency.setValueAtTime(chord.subRoot, now);
  subGain.gain.setValueAtTime(0.0001, now);
  subGain.gain.exponentialRampToValueAtTime(0.38, now + transitionTime);
  subOsc.connect(subGain);
  subGain.connect(spaceFilter);
  subOsc.start(now);
  bassOscillators.push({ osc: subOsc, gain: subGain });

  // 8' Bass Pedal (Triangle with warmth)
  const bassPedal = ctx.createOscillator();
  const bassPedalGain = ctx.createGain();
  bassPedal.type = 'triangle';
  bassPedal.frequency.setValueAtTime(chord.root, now);
  bassPedal.detune.setValueAtTime(3, now);
  bassPedalGain.gain.setValueAtTime(0.0001, now);
  bassPedalGain.gain.exponentialRampToValueAtTime(0.24, now + transitionTime);
  bassPedal.connect(bassPedalGain);
  bassPedalGain.connect(spaceFilter);
  bassPedal.start(now);
  bassOscillators.push({ osc: bassPedal, gain: bassPedalGain });

  // 2. Build Multi-Register Sacred Pipe Organ Chord
  chord.notes.forEach((freq, idx) => {
    // 8' Principal Pipe (Sine/Triangle blend)
    const pipe8 = ctx.createOscillator();
    const pipe8Gain = ctx.createGain();
    const panNode = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

    pipe8.type = idx % 2 === 0 ? 'sine' : 'triangle';
    pipe8.frequency.setValueAtTime(freq, now);
    pipe8.detune.setValueAtTime((idx % 2 === 0 ? -4 : 4) + (Math.random() * 2 - 1), now);

    const targetGain = (0.16 / (chord.notes.length * 0.75));
    pipe8Gain.gain.setValueAtTime(0.0001, now);
    pipe8Gain.gain.exponentialRampToValueAtTime(targetGain, now + transitionTime);

    pipe8.connect(pipe8Gain);

    if (panNode) {
      const panPos = ((idx / (chord.notes.length - 1)) * 1.4) - 0.7;
      panNode.pan.setValueAtTime(panPos, now);
      pipe8Gain.connect(panNode);
      panNode.connect(spaceFilter!);
      if (reverbDelay) panNode.connect(reverbDelay);
    } else {
      pipe8Gain.connect(spaceFilter!);
    }

    pipe8.start(now);
    organOscillators.push({ osc: pipe8, gain: pipe8Gain, pan: panNode || undefined });

    // 4' Octave & Celestial Shimmer (Every other note)
    if (idx <= 3) {
      const pipe4 = ctx.createOscillator();
      const pipe4Gain = ctx.createGain();
      pipe4.type = 'sine';
      pipe4.frequency.setValueAtTime(freq * 2, now);
      pipe4.detune.setValueAtTime(6, now);

      pipe4Gain.gain.setValueAtTime(0.0001, now);
      pipe4Gain.gain.exponentialRampToValueAtTime(targetGain * 0.45, now + transitionTime * 1.2);

      pipe4.connect(pipe4Gain);
      pipe4Gain.connect(spaceFilter!);
      if (reverbDelay) pipe4Gain.connect(reverbDelay);
      pipe4.start(now);
      organOscillators.push({ osc: pipe4, gain: pipe4Gain });
    }
  });
}

/**
 * Start the Interstellar Chord Progression & Arpeggio Loops
 */
function startInterstellarSequence(ctx: AudioContext) {
  currentChordIndex = 0;
  arpeggioStep = 0;

  // Initial chord trigger
  applyInterstellarChord(ctx, INTERSTELLAR_CHORDS[currentChordIndex]);

  // Chord Progression Loop: Swells through Interstellar sequence every 9.5 seconds
  if (chordCycleTimer) clearInterval(chordCycleTimer);
  chordCycleTimer = window.setInterval(() => {
    if (!state.isPlaying || state.mode !== 'interstellar') return;
    currentChordIndex = (currentChordIndex + 1) % INTERSTELLAR_CHORDS.length;
    applyInterstellarChord(ctx, INTERSTELLAR_CHORDS[currentChordIndex]);
  }, 9500);

  // Clock Tick Loop: 60-66 BPM (Every 450ms)
  if (clockTickTimer) clearInterval(clockTickTimer);
  clockTickTimer = window.setInterval(() => {
    if (!state.isPlaying || state.mode !== 'interstellar') return;
    playClockTick(ctx);
  }, 454); // ~66 BPM 8th-note pulse

  // Arpeggiator Ostinato Loop: 16th notes
  if (arpeggioTimer) clearInterval(arpeggioTimer);
  arpeggioTimer = window.setInterval(() => {
    if (!state.isPlaying || state.mode !== 'interstellar') return;
    const currentChord = INTERSTELLAR_CHORDS[currentChordIndex];
    if (currentChord && currentChord.arpNotes.length > 0) {
      const noteFreq = currentChord.arpNotes[arpeggioStep % currentChord.arpNotes.length];
      const isAccent = (arpeggioStep % currentChord.arpNotes.length) === 0;
      playArpeggioNote(ctx, noteFreq, isAccent);
      arpeggioStep++;
    }
  }, 227); // ~66 BPM 16th note rhythm (iconic "Day One / Cornfield" arpeggio)
}

/**
 * Setup Static Voices for other modes (deep-sub, sentimental, celestial)
 */
function buildStaticModeVoices(ctx: AudioContext) {
  if (!spaceFilter) return;

  let configs: { freq: number; type: OscillatorType; gain: number; detune: number; pan: number }[] = [];

  if (state.mode === 'deep-sub') {
    configs = [
      { freq: 36.71, type: 'sine', gain: 0.45, detune: 0, pan: 0 },
      { freq: 73.42, type: 'sine', gain: 0.35, detune: -3, pan: -0.3 },
      { freq: 73.42, type: 'triangle', gain: 0.20, detune: 3, pan: 0.3 },
      { freq: 110.00, type: 'sine', gain: 0.22, detune: -5, pan: -0.5 },
      { freq: 146.83, type: 'sine', gain: 0.12, detune: 4, pan: 0.5 },
    ];
  } else if (state.mode === 'celestial') {
    configs = [
      { freq: 73.42, type: 'sine', gain: 0.25, detune: 0, pan: 0 },
      { freq: 110.00, type: 'sine', gain: 0.22, detune: -6, pan: -0.6 },
      { freq: 164.81, type: 'sine', gain: 0.18, detune: 5, pan: 0.6 },
      { freq: 220.00, type: 'sine', gain: 0.15, detune: -4, pan: -0.4 },
      { freq: 261.63, type: 'triangle', gain: 0.12, detune: 7, pan: 0.4 },
      { freq: 329.63, type: 'sine', gain: 0.08, detune: -2, pan: 0.2 },
    ];
  } else {
    // Sentimental D-minor
    configs = [
      { freq: 55.00, type: 'sine', gain: 0.35, detune: 0, pan: 0 },
      { freq: 73.42, type: 'sine', gain: 0.30, detune: -4, pan: -0.4 },
      { freq: 110.00, type: 'sine', gain: 0.25, detune: 4, pan: 0.4 },
      { freq: 146.83, type: 'sine', gain: 0.18, detune: -2, pan: -0.2 },
      { freq: 174.61, type: 'triangle', gain: 0.14, detune: 3, pan: 0.2 },
      { freq: 220.00, type: 'sine', gain: 0.10, detune: -5, pan: -0.5 },
    ];
  }

  organOscillators = configs.map((cfg) => {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    let panNode: StereoPannerNode | undefined;

    osc.type = cfg.type;
    osc.frequency.setValueAtTime(cfg.freq, ctx.currentTime);
    osc.detune.setValueAtTime(cfg.detune, ctx.currentTime);

    oscGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(cfg.gain, ctx.currentTime + 2.5);

    if ('createStereoPanner' in ctx) {
      panNode = ctx.createStereoPanner();
      panNode.pan.setValueAtTime(cfg.pan, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(panNode);
      panNode.connect(spaceFilter!);
    } else {
      osc.connect(oscGain);
      oscGain.connect(spaceFilter!);
    }

    osc.start();
    return { osc, gain: oscGain, pan: panNode };
  });
}

/**
 * Start or resume the atmospheric soundscape
 */
export const startSoundscape = (selectedMode?: SoundscapeMode): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const ctx = getAudioContext();
    if (selectedMode) {
      state.mode = selectedMode;
    }

    // 1. Setup Master Gain
    if (!masterGain) {
      masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
    }
    const targetVolume = 0.22 * state.volume;
    masterGain.gain.setValueAtTime(Math.max(0.0001, masterGain.gain.value || 0.0001), ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, targetVolume), ctx.currentTime + 2.5);

    // 2. Setup Analyser Node for Visualizers
    if (!analyserNode) {
      analyserNode = ctx.createAnalyser();
      analyserNode.fftSize = 128;
      analyserNode.smoothingTimeConstant = 0.82;
      analyserNode.connect(masterGain);
    }

    // 3. Setup Master Cathedral/Space Filter
    if (!spaceFilter) {
      spaceFilter = ctx.createBiquadFilter();
      spaceFilter.type = 'lowpass';
      spaceFilter.Q.setValueAtTime(2.2, ctx.currentTime);
      spaceFilter.frequency.setValueAtTime(680, ctx.currentTime);
      spaceFilter.connect(analyserNode);
    }

    // 4. Setup Celestial Space Delay / Reverb simulation
    if (!reverbDelay) {
      reverbDelay = ctx.createDelay();
      reverbDelay.delayTime.setValueAtTime(0.38, ctx.currentTime);

      reverbGain = ctx.createGain();
      reverbGain.gain.setValueAtTime(0.38, ctx.currentTime);

      const delayFilter = ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.setValueAtTime(1200, ctx.currentTime);

      reverbDelay.connect(delayFilter);
      delayFilter.connect(reverbGain);
      reverbGain.connect(reverbDelay); // feedback loop
      reverbGain.connect(analyserNode);
    }

    // 5. Build Background Cosmic Wind Noise
    if (!noiseSource) {
      try {
        const noiseBuffer = createAtmosphericNoiseBuffer(ctx, 4);
        noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(450, ctx.currentTime);
        noiseFilter.Q.setValueAtTime(1.0, ctx.currentTime);

        noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 3.0);

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(masterGain);
        noiseSource.start();
      } catch (e) {}
    }

    // 6. Launch Mode
    if (state.mode === 'interstellar') {
      startInterstellarSequence(ctx);
    } else {
      buildStaticModeVoices(ctx);
    }

    state.isPlaying = true;
    notifyListeners();
    return true;
  } catch (err) {
    console.warn('Soundscape start error:', err);
    state.isPlaying = false;
    notifyListeners();
    return false;
  }
};

/**
 * Stop or fade out the soundscape smoothly
 */
export const stopSoundscape = () => {
  if (arpeggioTimer) { clearInterval(arpeggioTimer); arpeggioTimer = null; }
  if (chordCycleTimer) { clearInterval(chordCycleTimer); chordCycleTimer = null; }
  if (clockTickTimer) { clearInterval(clockTickTimer); clockTickTimer = null; }

  if (!state.isPlaying || !audioCtx || !masterGain) {
    state.isPlaying = false;
    notifyListeners();
    return;
  }

  try {
    const currentTime = audioCtx.currentTime;
    masterGain.gain.setValueAtTime(masterGain.gain.value, currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, currentTime + 1.2);

    setTimeout(() => {
      organOscillators.forEach(({ osc }) => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      organOscillators = [];

      bassOscillators.forEach(({ osc }) => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      bassOscillators = [];

      if (noiseSource) {
        try { noiseSource.stop(); noiseSource.disconnect(); } catch (e) {}
        noiseSource = null;
      }

      state.isPlaying = false;
      notifyListeners();
    }, 1300);
  } catch (e) {
    state.isPlaying = false;
    notifyListeners();
  }
};

/**
 * Toggle soundscape
 */
export const toggleCinematicSoundscape = (enable?: boolean, mode?: SoundscapeMode): boolean => {
  const target = enable !== undefined ? enable : !state.isPlaying;
  if (target) {
    return startSoundscape(mode);
  } else {
    stopSoundscape();
    return false;
  }
};

/**
 * Set soundscape volume (0.0 to 1.0)
 */
export const setSoundscapeVolume = (vol: number) => {
  state.volume = Math.max(0, Math.min(1, vol));
  if (audioCtx && masterGain && state.isPlaying) {
    const target = 0.22 * state.volume;
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, target), audioCtx.currentTime + 0.1);
  }
  notifyListeners();
};

/**
 * Set soundscape mode
 */
export const setSoundscapeMode = (mode: SoundscapeMode) => {
  state.mode = mode;
  if (state.isPlaying && audioCtx) {
    if (arpeggioTimer) { clearInterval(arpeggioTimer); arpeggioTimer = null; }
    if (chordCycleTimer) { clearInterval(chordCycleTimer); chordCycleTimer = null; }
    if (clockTickTimer) { clearInterval(clockTickTimer); clockTickTimer = null; }

    organOscillators.forEach(({ osc }) => {
      try { osc.stop(); osc.disconnect(); } catch (e) {}
    });
    organOscillators = [];

    bassOscillators.forEach(({ osc }) => {
      try { osc.stop(); osc.disconnect(); } catch (e) {}
    });
    bassOscillators = [];

    if (mode === 'interstellar') {
      startInterstellarSequence(audioCtx);
    } else {
      buildStaticModeVoices(audioCtx);
    }
  }
  notifyListeners();
};

export const setInteractiveFxEnabled = (enabled: boolean) => {
  state.interactiveFxEnabled = enabled;
  notifyListeners();
};

/**
 * Trigger an ethereal, low-intensity harmonic acoustic response on user interaction
 */
export const triggerInteractiveResonance = (type: 'nav' | 'click' | 'inspect' | 'hover' = 'click') => {
  if (!state.interactiveFxEnabled || typeof window === 'undefined') return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    let freq = 220.0; // A3 (Interstellar root)
    let duration = 0.5;
    let initialVol = 0.04 * state.volume;

    if (type === 'nav') {
      freq = 329.63; // E4
      duration = 0.8;
      initialVol = 0.05 * state.volume;
    } else if (type === 'inspect') {
      freq = 440.0; // A4
      duration = 1.1;
      initialVol = 0.05 * state.volume;
    } else if (type === 'hover') {
      freq = 164.81; // E3
      duration = 0.2;
      initialVol = 0.015 * state.volume;
    }

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.99, now + duration);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(initialVol, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  } catch (e) {
    // Graceful silent fallback
  }
};

/**
 * Auto-initialize audio on the first global user interaction anywhere in the window
 */
export function setupGlobalAutoplayGestureListener() {
  if (typeof window === 'undefined') return;

  const handleFirstGesture = () => {
    if (!state.isPlaying) {
      startSoundscape('interstellar');
    } else if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Clean up listeners once activated
    window.removeEventListener('pointerdown', handleFirstGesture);
    window.removeEventListener('click', handleFirstGesture);
    window.removeEventListener('keydown', handleFirstGesture);
    window.removeEventListener('touchstart', handleFirstGesture);
    window.removeEventListener('wheel', handleFirstGesture);
  };

  // Try immediate activation (works in browsers that allow autoplay or iframe policy)
  try {
    startSoundscape('interstellar');
  } catch (e) {}

  window.addEventListener('pointerdown', handleFirstGesture, { once: true, passive: true });
  window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
  window.addEventListener('keydown', handleFirstGesture, { once: true, passive: true });
  window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
  window.addEventListener('wheel', handleFirstGesture, { once: true, passive: true });
}

export const getSoundscapeAnalyser = (): AnalyserNode | null => {
  return analyserNode;
};

export const isSoundscapeActive = (): boolean => state.isPlaying;
export const getSoundscapeState = (): SoundscapeState => ({ ...state });
