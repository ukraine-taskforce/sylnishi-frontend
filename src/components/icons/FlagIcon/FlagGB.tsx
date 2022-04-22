import React from 'react';

export interface FlagGBProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagGB: React.FunctionComponent<FlagGBProps> = ({ alt, ...props }) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <clipPath id="UGTAssetFLagSelectorENGClip">
      <rect width="20" height="16" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#UGTAssetFLagSelectorENGClip)">
      <path d="M20 0H0V16H20V0Z" fill="#084CA1" />
      <path
        d="M20 0H17.4979L12.2874 4.16254V0H7.69856V4.33333L2.19095 0H0V2.16381L3.94986 5.28698H0V10.8298H3.91807L0 13.9752V16H2.59225L7.69856 11.9054V16H12.2874V11.8337L17.5631 16H20V13.9975L15.986 10.8292H20V5.28635H16.0058L20 2.08635V0Z"
        fill="white"
      />
      <path d="M6.4384 5.28635L0 0V1.39556L4.8103 5.28698H6.4384V5.28635Z" fill="#ED1C24" />
      <path d="M13.571 10.8298L20 16V14.7022L15.1991 10.8298H13.571Z" fill="#ED1C24" />
      <path
        d="M7.69856 10.8298H6.3743L0 16H1.52647L7.69856 11.0832V10.8292V10.8298Z"
        fill="#ED1C24"
      />
      <path
        d="M12.2874 5.28635H13.5204L20 0.129524V0H18.5418L12.2874 4.96V5.28635Z"
        fill="#ED1C24"
      />
      <path
        d="M20 6.46286H11.3039V0H8.68199V6.46286H0V9.65333H8.68199V16H11.3039V9.65333H20V6.46286Z"
        fill="#ED1C24"
      />
    </g>
  </svg>
);
