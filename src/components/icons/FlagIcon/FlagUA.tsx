import React from 'react';

export interface FlagUAProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagUA: React.FunctionComponent<FlagUAProps> = ({ alt, ...props }) => (
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
      d="M0 8H20V14C20 15.1046 19.1046 16 18 16H2C0.895431 16 0 15.1046 0 14V8Z"
      fill="#FFD400"
    />
    <path d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z" fill="#1337B8" />
  </svg>
);
