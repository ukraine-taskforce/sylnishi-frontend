import React from "react";

export interface ImgBackProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgBack: React.FunctionComponent<ImgBackProps> = ({ alt, ...props }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Boolean(alt) && <title>{alt}</title>}
      <path
        d="M12.3588 4.1438L13.8109 5.60447L8.06434 11.3954H20.5977V13.4672H8.06434L13.8109 19.2581L12.3588 20.7188L4.12 12.4313L12.3588 4.1438Z"
        fill="black"
      />
    </svg>
  );
};
