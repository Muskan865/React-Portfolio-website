type CloudProps = {
  children: React.ReactNode;
  size?: number;
};
export function Cloud({ children, size = 220 }: CloudProps) {
  return (
    <div style={{ position: "relative", width: size, height: size * 0.72, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg viewBox="0 0 220 160" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        <path d="M40,120 Q10,120 10,95 Q10,75 30,72 Q25,40 55,38 Q60,15 90,18 Q100,5 125,12 Q145,5 158,22 Q185,20 188,45 Q210,48 210,70 Q210,95 185,98 Q190,120 165,122 Q150,135 130,128 Q115,140 95,132 Q75,142 60,130 Z"
          fill="white" stroke="#b8d4f0" strokeWidth="2" />
      </svg>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: size * 0.1, color: "#2c4a7a", padding: "0 24px" }}>
        {children}
      </div>
    </div>
  );
}
