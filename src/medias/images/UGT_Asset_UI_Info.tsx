import React from 'react';

export interface ImgInfoProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  color?: string;
}

export const ImgInfo: React.FunctionComponent<ImgInfoProps> = ({ alt, color, ...props }) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 5H11.5V7H9.5V5ZM9.5 9H11.5V15H9.5V9ZM10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18Z"
      fill={color ?? 'var(--color-action)'}
    />
  </svg>
);
