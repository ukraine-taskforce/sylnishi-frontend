export interface SpacerProps {
  size?: number;
  horizontal?: boolean;
  flex?: number;
}

export const Spacer: React.FunctionComponent<SpacerProps> = ({ flex, size = 8, horizontal = false }) => {
  if (flex == null) {
    return <div style={{ display: "flex", [horizontal ? "width" : "height"]: `${size}px` }} />;
  } else {
    return <div style={{ display: "flex", flex: `${flex} ${size ?? 0}px` }} />;
  }
};
