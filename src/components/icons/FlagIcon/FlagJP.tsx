import React from 'react';

export interface FlagJPProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagJP: React.FunctionComponent<FlagJPProps> = ({ alt, ...props }) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <path
      d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H18C18.8284 0.5 19.5 1.17157 19.5 2V14C19.5 14.8284 18.8284 15.5 18 15.5L2 15.5C1.17157 15.5 0.5 14.8284 0.5 14V2Z"
      fill="white"
      stroke="#F1F1F1"
    />
    <circle cx="10" cy="8" r="3" fill="#CF2A20" />
  </svg>
);
