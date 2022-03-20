import React from "react";

export interface ImgCloseProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  fill?: string;
}

export const ImgClose: React.FunctionComponent<ImgCloseProps> = ({ alt, fill, ...props }) => {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Boolean(alt) && <title>{alt}</title>}
      <path
        d="M30.0837 10.1492L27.8512 7.91675L19.0003 16.7676L10.1495 7.91675L7.91699 10.1492L16.7678 19.0001L7.91699 27.8509L10.1495 30.0834L19.0003 21.2326L27.8512 30.0834L30.0837 27.8509L21.2328 19.0001L30.0837 10.1492Z"
        fill={fill ? fill : "#323232"}
      />
    </svg>
  );
};
