import React from "react";

export interface FlagEEProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagEE: React.FunctionComponent<FlagEEProps> = ({ alt, ...props }) => {
  return (
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
        d="M19.5 14C19.5 14.8284 18.8284 15.5 18 15.5L2 15.5C1.17157 15.5 0.5 14.8284 0.5 14L0.500001 10C0.500001 9.17157 1.17157 8.5 2 8.5L18 8.5C18.8284 8.5 19.5 9.17157 19.5 10L19.5 14Z"
        fill="white"
        stroke="#F1F1F1"
      />
      <path d="M0 5H20V10H0V5Z" fill="#0D1234" />
      <path d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V5H0V2Z" fill="#0729A0" />
    </svg>
  );
};
