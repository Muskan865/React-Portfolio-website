type AnnotationProps = {
  text: string;
  x: string;
  y: string;
  rotate: number;
};
export function Annotation({ text, x, y, rotate }: AnnotationProps) {
  return (
    <div style={{
      position: "absolute", left: x, top: y,
      transform: `rotate(${rotate}deg)`,
      fontFamily: "'Caveat',cursive",
      fontSize: "1.05rem", color: "#2c4a7a",
      lineHeight: 1.3, whiteSpace: "pre-line", textAlign: "center",
      pointerEvents: "none", userSelect: "none",
    }}>
      {text}
    </div>
  );
}