import React, { useState } from 'react';
import { Camera, Sparkles, Check, RefreshCw, UserCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AlexandrePortraitProps {
  className?: string;
  showBadge?: boolean;
}

export const AlexandrePortrait: React.FC<AlexandrePortraitProps> = ({ 
  className = '',
  showBadge = true 
}) => {
  const { isLight } = useTheme();
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('alexandre_custom_photo_url') || null;
  });
  const [imageError, setImageError] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhotoUrl(result);
        localStorage.setItem('alexandre_custom_photo_url', result);
        setImageError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Glow & Ambient Border */}
      <div className={`relative rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 ${
        isLight 
          ? 'bg-neutral-100 border-neutral-300 shadow-neutral-400/30' 
          : 'bg-neutral-950 border-neutral-800 shadow-black'
      }`}>
        
        {/* Aspect Ratio Container */}
        <div className="relative aspect-[4/4.5] sm:aspect-[4/4.8] w-full overflow-hidden flex items-center justify-center">
          
          {customPhotoUrl && !imageError ? (
            <img
              src={customPhotoUrl}
              alt="Alexandre Paulino - Digital Project Manager & Tech Operations Lead"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            /* Stylized Executive Portrait Illustration & Lighting Frame */
            <div className="w-full h-full relative flex flex-col items-center justify-between p-6 sm:p-8 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-center overflow-hidden">
              
              {/* Studio Rim Light Accents */}
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-neutral-500/10 blur-3xl pointer-events-none" />
              
              {/* Top Bar inside portrait */}
              <div className="w-full flex items-center justify-between z-10 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  EXECUTIVE PROFILE
                </span>
                <span>USA &amp; GLOBAL</span>
              </div>

              {/* Central Visual Presentation */}
              <div className="relative z-10 my-auto flex flex-col items-center space-y-4">
                
                {/* Monogram / Signature Emblem */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-neutral-700 via-neutral-400 to-white shadow-2xl">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex flex-col items-center justify-center border border-neutral-800">
                    <span className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tighter">
                      AP
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
                      TECH LEAD
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-syne font-bold text-white tracking-wide">
                    ALEXANDRE PAULINO
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Digital Project Manager &amp; Tech Ops Lead
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 pt-1">
                    Clark, NJ &amp; Global Remote
                  </p>
                </div>
              </div>

              {/* Bottom Quick Specs */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800/80 z-10 text-left">
                <div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase">EXP</div>
                  <div className="text-xs font-mono text-white font-bold">10+ YRS</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase">SITES</div>
                  <div className="text-xs font-mono text-white font-bold">40+ DELIV</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase">STATUS</div>
                  <div className="text-xs font-mono text-emerald-400 font-bold">AVAILABLE</div>
                </div>
              </div>

            </div>
          )}

          {/* Photo Customizer Action Overlay */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <label 
              htmlFor="alexandre-photo-upload"
              className="px-3 py-1.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700/80 backdrop-blur-md text-[10px] font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer shadow-lg transition-all"
              title="Upload your preferred headshot photo file (stored locally)"
            >
              <Camera className="w-3 h-3 text-white" />
              <span className="hidden sm:inline">Set Photo</span>
            </label>
            <input
              id="alexandre-photo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            {customPhotoUrl && (
              <button
                onClick={() => {
                  setCustomPhotoUrl(null);
                  localStorage.removeItem('alexandre_custom_photo_url');
                }}
                className="p-1.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer"
                title="Reset to default badge"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Floating Status Pill */}
      {showBadge && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <div className={`px-4 py-1.5 rounded-full border shadow-xl flex items-center gap-2 text-xs font-mono backdrop-blur-md transition-colors ${
            isLight
              ? 'bg-white border-neutral-300 text-neutral-900 shadow-neutral-300/50'
              : 'bg-neutral-900 border-neutral-700 text-white shadow-black/80'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Ready for Full-Time, Part-Time &amp; Freelance
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
