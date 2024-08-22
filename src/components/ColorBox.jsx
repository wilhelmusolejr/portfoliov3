export default function ColorBox({ color }) {
  return (
    <>
      <div
        className="color-box border"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}
