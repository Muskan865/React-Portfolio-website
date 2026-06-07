type ArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

function Arrow({ x1, y1, x2, y2 }: ArrowProps) {
  const mx = (x1 + x2) / 2 + (Math.random() * 30 - 15);
  const my = (y1 + y2) / 2 - 20;
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }} xmlns="http://www.w3.org/2000/svg">
      <path d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} fill="none" stroke="#6a90c0" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6a90c0" />
        </marker>
      </defs>
    </svg>
  );
}