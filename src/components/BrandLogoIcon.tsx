import React from 'react';

interface BrandLogoIconProps {
  id: string;
  className?: string;
}

export const BrandLogoIcon: React.FC<BrandLogoIconProps> = ({ id, className = "w-full h-full" }) => {
  switch (id) {
    case 'rohrer-mfg':
    case 'rohrer':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Pneumatic post driver / Industrial anvil icon */}
          <g transform="translate(12, 16)">
            <rect x="8" y="4" width="28" height="12" rx="2" fill="currentColor" />
            <rect x="18" y="16" width="8" height="24" fill="currentColor" />
            <polygon points="12,40 32,40 22,48" fill="currentColor" />
            <circle cx="22" cy="10" r="2" fill="#0a0a0a" />
          </g>
          {/* ROHRER MFG */}
          <text
            x="58"
            y="37"
            fontFamily="'Syne', 'Impact', sans-serif"
            fontSize="21"
            fontWeight="900"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            ROHRER
          </text>
          <text
            x="59"
            y="53"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.22em"
            fill="currentColor"
          >
            MANUFACTURING
          </text>
        </svg>
      );

    case 'the-ifish-store':
    case 'ifish-store':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Aquatic fish silhouette & bubble */}
          <g transform="translate(12, 18)">
            <path
              d="M4 24 C14 12, 34 16, 42 24 C34 32, 14 36, 4 24 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M42 24 L50 14 L50 34 Z" fill="currentColor" />
            <circle cx="14" cy="22" r="2.5" fill="currentColor" />
            <circle cx="30" cy="12" r="2" fill="currentColor" />
          </g>
          {/* the iFISH store */}
          <text
            x="70"
            y="38"
            fontFamily="'Syne', sans-serif"
            fontSize="20"
            fontWeight="900"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            the <tspan fontSize="22" fontWeight="900">iFISH</tspan>
          </text>
          <text
            x="71"
            y="54"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="0.24em"
            fill="currentColor"
          >
            STORE
          </text>
        </svg>
      );

    case 'elite-psychiatry':
    case 'elite-psych':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Brain synapse / wellness lotus spark */}
          <g transform="translate(12, 16)">
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M14 24 Q24 14 34 24 Q24 34 14 24 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="3.5" fill="currentColor" />
          </g>
          {/* ELITE PSYCHIATRY */}
          <text
            x="64"
            y="36"
            fontFamily="'Syne', sans-serif"
            fontSize="18"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            ELITE
          </text>
          <text
            x="64"
            y="52"
            fontFamily="'Cinzel', serif"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.16em"
            fill="currentColor"
          >
            PSYCHIATRY
          </text>
        </svg>
      );

    case 'essex-union-podiatry':
    case 'essex-union':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Medical orthopedic cross & motion curve */}
          <g transform="translate(12, 16)">
            <rect x="20" y="8" width="8" height="32" rx="2" fill="currentColor" />
            <rect x="8" y="20" width="32" height="8" rx="2" fill="currentColor" />
            <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
          {/* ESSEX UNION PODIATRY */}
          <text
            x="62"
            y="35"
            fontFamily="'Syne', sans-serif"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            ESSEX UNION
          </text>
          <text
            x="62"
            y="51"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.2em"
            fill="currentColor"
          >
            PODIATRY
          </text>
        </svg>
      );

    case 'little-friends':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Circular badge with paw */}
          <circle cx="44" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="44" cy="40" r="23" fill="currentColor" fillOpacity="0.15" />
          {/* Paw main pad */}
          <path
            d="M36 44 C36 38, 52 38, 52 44 C52 49, 48 52, 44 52 C40 52, 36 49, 36 44 Z"
            fill="currentColor"
          />
          {/* Paw 4 toe pads */}
          <circle cx="34" cy="34" r="3.5" fill="currentColor" />
          <circle cx="40.5" cy="30" r="3.5" fill="currentColor" />
          <circle cx="47.5" cy="30" r="3.5" fill="currentColor" />
          <circle cx="54" cy="34" r="3.5" fill="currentColor" />
          {/* LITTLE FRIENDS Wordmark */}
          <text
            x="84"
            y="37"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontSize="21"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            LITTLE
          </text>
          <text
            x="84"
            y="57"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontSize="21"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            FRIENDS
          </text>
        </svg>
      );

    case 'prysma':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* 3D Faceted Prism Emblem */}
          <g transform="translate(14, 14)">
            {/* Top diamond facet */}
            <polygon points="26,4 48,16 26,28 4,16" fill="currentColor" fillOpacity="0.9" />
            {/* Left side facet */}
            <polygon points="4,16 26,28 26,50 4,38" fill="currentColor" fillOpacity="0.45" />
            {/* Right side facet */}
            <polygon points="26,28 48,16 48,38 26,50" fill="currentColor" fillOpacity="0.7" />
            {/* Center accent edge */}
            <line x1="26" y1="28" x2="26" y2="50" stroke="currentColor" strokeWidth="1.5" />
          </g>
          {/* Prysma text */}
          <text
            x="80"
            y="49"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontSize="32"
            fontWeight="800"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            Prysma
          </text>
        </svg>
      );

    case 'strong-hardwood':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Square Badge with Italic SH */}
          <rect x="12" y="16" width="48" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <path
            d="M24 38 L38 26 L38 38 L24 50 L38 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 26 L40 54 M48 26 L48 54 M40 40 L48 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* STRONG HARDWOOD FLOORS text */}
          <text
            x="70"
            y="36"
            fontFamily="'Syne', sans-serif"
            fontSize="18"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            STRONG
          </text>
          <text
            x="70"
            y="52"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            HARDWOOD FLOORS
          </text>
        </svg>
      );

    case 'linecity':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* 3 segmented rounded horizontal bars */}
          <g transform="translate(12, 22)">
            <rect x="0" y="4" width="22" height="6" rx="3" fill="currentColor" />
            <rect x="26" y="4" width="14" height="6" rx="3" fill="currentColor" fillOpacity="0.6" />
            <rect x="0" y="16" width="38" height="6" rx="3" fill="currentColor" />
            <rect x="42" y="16" width="10" height="6" rx="3" fill="currentColor" fillOpacity="0.4" />
            <rect x="0" y="28" width="16" height="6" rx="3" fill="currentColor" fillOpacity="0.7" />
            <rect x="20" y="28" width="28" height="6" rx="3" fill="currentColor" />
          </g>
          {/* linecity text */}
          <text
            x="76"
            y="49"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            linecity
          </text>
          <text
            x="180"
            y="34"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10"
            fontWeight="600"
            fill="currentColor"
          >
            ™
          </text>
        </svg>
      );

    case 'maxx-save':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* MAXX text */}
          <text
            x="14"
            y="42"
            fontFamily="'Syne', 'Impact', sans-serif"
            fontSize="30"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            MAXX
          </text>
          {/* SAVE inside rectangular box */}
          <rect x="118" y="18" width="86" height="28" rx="4" fill="currentColor" />
          <text
            x="161"
            y="39"
            textAnchor="middle"
            fontFamily="'Syne', sans-serif"
            fontSize="19"
            fontWeight="900"
            letterSpacing="0.12em"
            fill="#0a0a0a"
          >
            SAVE
          </text>
          {/* Subtitle */}
          <text
            x="16"
            y="60"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="9"
            fontWeight="800"
            letterSpacing="0.22em"
            fill="currentColor"
          >
            DISCOUNT STORE &amp; FURNITURE
          </text>
        </svg>
      );

    case 'adonit':
      return (
        <svg viewBox="0 0 200 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Adonit Delta Stylus Geometric Icon */}
          <g transform="translate(18, 16)">
            <path
              d="M24 6 L44 44 L4 44 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M24 6 L24 44"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          {/* adonit text */}
          <text
            x="78"
            y="49"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontSize="30"
            fontWeight="700"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            adonit
          </text>
        </svg>
      );

    case 'cloudx':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* CloudX with Rocket Launch Trail */}
          <g transform="translate(14, 18)">
            <path
              d="M10 32 C6 32, 2 28, 2 22 C2 16, 7 12, 13 12 C14 7, 20 2, 27 2 C33 2, 38 6, 40 11 C43 11, 46 14, 46 18 C46 22, 43 25, 39 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M26 24 L36 12 L38 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text
            x="74"
            y="50"
            fontFamily="'Syne', sans-serif"
            fontSize="32"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            CLOUDX
          </text>
        </svg>
      );

    case 'neurokin':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* 4-point Sparkle / Neuron Node */}
          <g transform="translate(16, 16)">
            <circle cx="24" cy="24" r="6" fill="currentColor" />
            <path
              d="M24 4 L24 44 M4 24 L44 24 M10 10 L38 38 M10 38 L38 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="4" r="2.5" fill="currentColor" />
            <circle cx="24" cy="44" r="2.5" fill="currentColor" />
            <circle cx="4" cy="24" r="2.5" fill="currentColor" />
            <circle cx="44" cy="24" r="2.5" fill="currentColor" />
          </g>
          {/* Neurokin text */}
          <text
            x="76"
            y="49"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.01em"
            fill="currentColor"
          >
            Neurokin
          </text>
        </svg>
      );

    case 'teddy-puppy':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Bear & Puppy Duo Silhouette */}
          <g transform="translate(14, 18)">
            {/* Bear head */}
            <circle cx="16" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="8" cy="12" r="4" fill="currentColor" />
            <circle cx="24" cy="12" r="4" fill="currentColor" />
            {/* Puppy head right */}
            <circle cx="34" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M28 16 C26 12, 22 16, 26 22" fill="currentColor" />
            <path d="M40 16 C42 12, 46 16, 42 22" fill="currentColor" />
          </g>
          {/* Teddy + Puppy & Co. text */}
          <text
            x="72"
            y="38"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="17"
            fontWeight="800"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            Teddy + Puppy
          </text>
          <text
            x="74"
            y="54"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.22em"
            fill="currentColor"
          >
            &amp; COMPANY
          </text>
        </svg>
      );

    case 'tri-county':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Circular Maritime Seal */}
          <g transform="translate(12, 14)">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="26" cy="26" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            {/* Sun Rays & Waves */}
            <circle cx="26" cy="22" r="6" fill="currentColor" />
            <path d="M12 34 C18 30, 22 38, 26 34 C30 30, 34 38, 40 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 39 C20 36, 24 42, 28 39 C32 36, 36 42, 40 39" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          {/* TRI-COUNTY TROPICALS text */}
          <text
            x="72"
            y="36"
            fontFamily="'Syne', sans-serif"
            fontSize="16"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            TRI-COUNTY
          </text>
          <text
            x="72"
            y="53"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="12.5"
            fontWeight="700"
            letterSpacing="0.18em"
            fill="currentColor"
          >
            TROPICALS
          </text>
        </svg>
      );

    case 'brookline-lock':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Padlock Icon */}
          <g transform="translate(14, 16)">
            {/* Shackle */}
            <path
              d="M14 20 L14 12 C14 6, 26 6, 26 12 L26 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Body */}
            <rect x="6" y="19" width="28" height="24" rx="4" fill="currentColor" />
            <circle cx="20" cy="29" r="2.5" fill="#0a0a0a" />
            <path d="M20 29 L20 36" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* BROOKLINE Lock Company text */}
          <text
            x="64"
            y="37"
            fontFamily="'Syne', sans-serif"
            fontSize="18"
            fontWeight="900"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            BROOKLINE
          </text>
          <text
            x="65"
            y="53"
            fontFamily="'Cinzel', serif"
            fontSize="12"
            fontWeight="600"
            fontStyle="italic"
            letterSpacing="0.05em"
            fill="currentColor"
          >
            Lock Company
          </text>
        </svg>
      );

    case 'verve-wine':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Verve Starry Seal */}
          <g transform="translate(12, 12)">
            <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Stars */}
            <circle cx="18" cy="18" r="1.5" fill="currentColor" />
            <circle cx="28" cy="14" r="2" fill="currentColor" />
            <circle cx="38" cy="19" r="1.5" fill="currentColor" />
            <circle cx="16" cy="30" r="1.5" fill="currentColor" />
            <circle cx="39" cy="32" r="1.5" fill="currentColor" />
            <circle cx="28" cy="40" r="2" fill="currentColor" />
            {/* Wine Glass / Crescent */}
            <path d="M22 24 C22 32, 34 32, 34 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M28 32 L28 36 M24 36 L32 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* verve WINE & SPIRITS */}
          <text
            x="76"
            y="37"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="22"
            fontWeight="800"
            fontStyle="italic"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            verve
          </text>
          <text
            x="78"
            y="54"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="9.5"
            fontWeight="800"
            letterSpacing="0.22em"
            fill="currentColor"
          >
            WINE &amp; SPIRITS
          </text>
        </svg>
      );

    case 'office-evolution':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* 6-point asterisk icon */}
          <g transform="translate(14, 20)">
            <circle cx="18" cy="20" r="4" fill="currentColor" />
            <line x1="18" y1="6" x2="18" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="6" y1="13" x2="30" y2="27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="6" y1="27" x2="30" y2="13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* officeevolution text */}
          <text
            x="58"
            y="49"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="23"
            fontWeight="800"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            officeevolution
          </text>
        </svg>
      );

    case 'certified-contract':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* CS Interlocking Hexagon / Monogram */}
          <g transform="translate(10, 16)">
            <rect x="4" y="4" width="38" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path
              d="M30 15 C20 15, 14 20, 14 26 C14 32, 20 37, 30 37"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M24 19 L32 19 C32 23, 24 24, 24 28 C24 31, 32 31, 32 31"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
          {/* CERTIFIED CONTRACT SOLUTIONS text */}
          <text
            x="62"
            y="32"
            fontFamily="'Syne', sans-serif"
            fontSize="15"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            CERTIFIED
          </text>
          <text
            x="62"
            y="46"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="0.1em"
            fill="currentColor"
          >
            CONTRACT SOLUTIONS
          </text>
        </svg>
      );

    case 'tourney-direct':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* High-tech chevron banner */}
          <g transform="translate(12, 20)">
            <path d="M4 8 L18 20 L4 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 8 L30 20 L16 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* TOURNEY DIRECT */}
          <text
            x="56"
            y="37"
            fontFamily="'Syne', sans-serif"
            fontSize="19"
            fontWeight="900"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            TOURNEY
          </text>
          <text
            x="57"
            y="55"
            fontFamily="'Syne', sans-serif"
            fontSize="19"
            fontWeight="900"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            DIRECT
          </text>
        </svg>
      );

    case 'ice-hunters':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Mountain & Antler Emblem */}
          <g transform="translate(14, 14)">
            {/* Mountains */}
            <polygon points="26,8 44,40 8,40" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="18,18 32,40 4,40" fill="currentColor" fillOpacity="0.3" />
            {/* Antlers */}
            <path d="M12 18 C8 12, 4 14, 2 8 M6 13 C2 10, 4 4, 8 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 18 C44 12, 48 14, 50 8 M46 13 C50 10, 48 4, 44 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* ICE HUNTERS */}
          <text
            x="76"
            y="42"
            fontFamily="'Syne', sans-serif"
            fontSize="21"
            fontWeight="900"
            letterSpacing="0.12em"
            fill="currentColor"
          >
            ICE HUNTERS
          </text>
          <text
            x="78"
            y="57"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="0.28em"
            fill="currentColor"
          >
            OUTDOOR APPAREL
          </text>
        </svg>
      );

    case 'bridging-gaps':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Suspension Bridge & Mountain Silhouette */}
          <g transform="translate(12, 16)">
            {/* Bridge cable */}
            <path d="M2 36 Q22 14 42 36" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <line x1="8" y1="26" x2="8" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="16" y1="20" x2="16" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="18" x2="22" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="20" x2="28" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="36" y1="26" x2="36" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Mountain peak behind */}
            <polygon points="22,6 34,22 10,22" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>
          {/* BRIDGING THE GAPS */}
          <text
            x="68"
            y="35"
            fontFamily="'Syne', sans-serif"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            BRIDGING
          </text>
          <text
            x="68"
            y="52"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            THE GAPS
          </text>
        </svg>
      );

    case 'united-way':
      return (
        <svg viewBox="0 0 220 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* United Way Rainbow & Cradled Person */}
          <g transform="translate(14, 14)">
            {/* Rainbow arcs */}
            <path d="M4 28 C4 12, 40 12, 40 28" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M10 28 C10 17, 34 17, 34 28" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Hand & Person */}
            <circle cx="22" cy="22" r="3.5" fill="currentColor" />
            <path d="M16 34 C16 28, 28 28, 28 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M6 38 C14 44, 30 44, 38 38" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* United Way text */}
          <text
            x="68"
            y="42"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontSize="23"
            fontWeight="900"
            letterSpacing="-0.01em"
            fill="currentColor"
          >
            United Way
          </text>
        </svg>
      );

    case 'beinhaker':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Beinhaker BZ square outline */}
          <g transform="translate(14, 16)">
            <rect x="2" y="2" width="42" height="42" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="6" y="6" width="34" height="34" rx="2" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <text
              x="23"
              y="30"
              textAnchor="middle"
              fontFamily="'Cinzel', serif"
              fontSize="20"
              fontWeight="bold"
              fill="currentColor"
            >
              B
            </text>
          </g>
          {/* BEINHAKER text */}
          <text
            x="70"
            y="37"
            fontFamily="'Syne', sans-serif"
            fontSize="18"
            fontWeight="900"
            letterSpacing="0.1em"
            fill="currentColor"
          >
            BEINHAKER
          </text>
          <text
            x="71"
            y="53"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.18em"
            fill="currentColor"
          >
            BUSINESS &amp; ESTATE LAW
          </text>
        </svg>
      );

    case 'green-roots':
      return (
        <svg viewBox="0 0 240 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          {/* Circular Seal with Sprout Leaves */}
          <g transform="translate(12, 14)">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Sprout & Hand */}
            <path
              d="M26 38 L26 22 C26 14, 14 16, 14 24 C20 24, 26 22, 26 22"
              fill="currentColor"
              fillOpacity="0.4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M26 22 C26 14, 38 16, 38 24 C32 24, 26 22, 26 22"
              fill="currentColor"
              fillOpacity="0.8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
          {/* GREEN ROOTS */}
          <text
            x="70"
            y="36"
            fontFamily="'Syne', sans-serif"
            fontSize="16"
            fontWeight="900"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            GREEN ROOTS
          </text>
          <text
            x="71"
            y="52"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="9.5"
            fontWeight="700"
            letterSpacing="0.16em"
            fill="currentColor"
          >
            ORGANIC LAWN CARE
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 80" fill="currentColor" preserveAspectRatio="xMidYMid meet" className={className}>
          <circle cx="36" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
          <text
            x="68"
            y="48"
            fontFamily="'Syne', sans-serif"
            fontSize="20"
            fontWeight="800"
            letterSpacing="0.05em"
            fill="currentColor"
          >
            {id.toUpperCase().replace('-', ' ')}
          </text>
        </svg>
      );
  }
};
