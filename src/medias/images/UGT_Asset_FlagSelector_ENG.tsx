import React from "react";

export interface ImgFlagEnProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagEn: React.FunctionComponent<ImgFlagEnProps> = ({ alt, ...props }) => {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
      {...props}
    >
      {Boolean(alt) && <title>{alt}</title>}
      <rect x="0" y="0" width="17" height="10" fill="rgb(65,71,155);" />
      <path
        d="M8.505,3.143L0.813,-1.382L-0.813,1.382L5.345,5.004L-0.808,8.629L0.82,11.392L8.506,6.864L16.187,11.382L17.813,8.618L11.666,5.002L17.814,1.381L16.186,-1.381L8.505,3.143Z"
        fill="white"
      />
      <path
        d="M8.506,4.296L0.309,-0.526L-0.309,0.526L7.304,5.004L-0.303,9.485L0.315,10.536L8.506,5.711L16.691,10.526L17.309,9.474L9.708,5.003L17.309,0.525L16.691,-0.525L8.506,4.296Z"
        fill=":rgb(220,37,28)"
      />
      <path
        d="M6.897,3.397L0,3.397L0,6.603L6.897,6.603L6.897,10L10.103,10L10.103,6.603L17,6.603L17,3.397L10.103,3.397L10.103,0L6.897,0L6.897,3.397Z"
        fill="white"
      />
      <path
        d="M7.89,4.39L0,4.39L0,5.61L7.89,5.61L7.89,10L9.11,10L9.11,5.61L17,5.61L17,4.39L9.11,4.39L9.11,0L7.89,0L7.89,4.39Z"
        fill="rgb(220,37,28)"
      />
    </svg>
  );
};
