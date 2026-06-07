type WaveProps = {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
};
export function Wave({ topColor, bottomColor, flip = false }: WaveProps) {
  return (
    <div style={{ position: "relative", height: 80, overflow: "hidden", marginTop: -1 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          transform: flip ? "scaleY(-1)" : "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="80" fill={topColor} />
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}