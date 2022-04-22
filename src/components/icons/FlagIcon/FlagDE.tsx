import React from 'react';

export interface FlagDEProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagDE: React.FunctionComponent<FlagDEProps> = ({ alt, ...props }) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <path d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V5H0V2Z" fill="#0D1234" />
    <path d="M0 5H20V11H0V5Z" fill="#CF2A20" />
    <path
      d="M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 7.8281e-08 15.1046 1.74846e-07 14L4.37114e-07 11L20 11L20 14Z"
      fill="#FFD400"
    />
  </svg>
);
