import React from 'react';

export interface ImgQuantityMinusProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgQuantityMinus: React.FunctionComponent<ImgQuantityMinusProps> = ({
  alt,
  ...props
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {Boolean(alt) && <title>{alt}</title>}
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="black"
    />
    <path d="M25.3343 20.6666H16.001V19.3333H25.3343V20.6666Z" fill="white" />
  </svg>
);
