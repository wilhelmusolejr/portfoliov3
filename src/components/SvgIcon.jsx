function SvgIcon({ icon, size }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: icon }}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export default SvgIcon;
