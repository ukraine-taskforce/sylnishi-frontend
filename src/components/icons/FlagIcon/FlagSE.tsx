import React from "react";

export interface FlagSEProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const FlagSE: React.FunctionComponent<FlagSEProps> = ({ alt, ...props }) => {
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
        fill="#1337B8"
      />
      <rect x="6" width="4" height="16" fill="#FFD400" />
      <rect x="20" y="6" width="4" height="20" transform="rotate(90 20 6)" fill="#FFD400" />
    </svg>
  );
};
