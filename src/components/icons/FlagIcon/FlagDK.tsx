import React from "react";

export interface FlagDKProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagDK: React.FunctionComponent<FlagDKProps> = ({ alt, ...props }) => {
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
        d="M2 0C0.895431 0 0 0.89543 0 2V14C0 15.1046 0.895431 16 2 16L18 16C19.1046 16 20 15.1046 20 14V2C20 0.895431 19.1046 0 18 0H2Z"
        fill="#CF2A20"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0H6V6L0 6V10H6V16H10V10L20 10V6L10 6V0Z"
        fill="white"
      />
      <line x1="6" y1="0.5" x2="10" y2="0.5" stroke="#F1F1F1" />
      <line x1="6" y1="15.5" x2="10" y2="15.5" stroke="#F1F1F1" />
      <line x1="0.5" y1="6" x2="0.5" y2="10" stroke="#F1F1F1" />
      <line x1="19.5" y1="6" x2="19.5" y2="10" stroke="#F1F1F1" />
    </svg>
  );
};
