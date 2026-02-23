export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>{children}</span>
  );
}