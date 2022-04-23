import React from 'react';

export interface ImgDropdownPropsUp extends React.SVGProps<SVGSVGElement> {
  alt: string;
  fill?: string;
}

export const ImgDropdownUp: React.FunctionComponent<ImgDropdownPropsUp> = ({
  alt,
  fill,
  ...props
}) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <path
      d="M1 7L7 1L13 7"
      stroke="#0D1234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
