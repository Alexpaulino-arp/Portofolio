import React from 'react';
import {
  siShopify,
  siZapier,
  siNextdotjs,
  siTypescript,
  siWordpress,
  siPython,
  siCloudflare,
  siGooglesearchconsole,
  siHubspot,
  siClickup,
  siFigma,
  siJira,
  siNotion,
  siGithub,
  siGoogleanalytics,
  siLinear
} from 'simple-icons';

interface TechArsenalLogoProps {
  id: string;
  className?: string;
}

export const TechArsenalLogo: React.FC<TechArsenalLogoProps> = ({ id, className = "w-6 h-6" }) => {
  switch (id) {
    case 'figma':
    case 'ux-ui':
    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siFigma.path} />
        </svg>
      );

    case 'jira':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siJira.path} />
        </svg>
      );

    case 'linear':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siLinear.path} />
        </svg>
      );

    case 'notion':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siNotion.path} />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siGithub.path} />
        </svg>
      );

    case 'klaviyo':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 4.5H1.5v15h21V4.5zM20 7.5L12 13 4 7.5V6.5l8 5.5 8-5.5v1z" />
        </svg>
      );

    case 'analytics':
    case 'ga4':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siGoogleanalytics.path} />
        </svg>
      );

    case 'shopify':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siShopify.path} />
        </svg>
      );

    case 'hubspot':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siHubspot.path} />
        </svg>
      );

    case 'ghl':
    case 'gohighlevel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 16V8L12 13L17 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'zapier':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siZapier.path} />
        </svg>
      );

    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siWordpress.path} />
        </svg>
      );

    case 'duda':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="currentColor" fillOpacity="0.15" />
          <path
            d="M6.5 5.5H13C16.5899 5.5 19.5 8.41015 19.5 12C19.5 15.5899 16.5899 18.5 13 18.5H6.5V5.5ZM10 9V15H12.8C14.4569 15 15.8 13.6569 15.8 12C15.8 10.3431 14.4569 9 12.8 9H10Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'pm':
    case 'agile':
    case 'clickup':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siClickup.path} />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siPython.path} />
        </svg>
      );

    case 'seo':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siGooglesearchconsole.path} />
        </svg>
      );

    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siNextdotjs.path} />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siTypescript.path} />
        </svg>
      );

    case 'cloudflare':
    case 'webops':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={siCloudflare.path} />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
  }
};
