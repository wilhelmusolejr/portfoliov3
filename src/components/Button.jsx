export default function Logo({
  children,
  className = "",
  href = "#",
  target = "",
  onClick = () => {},
}) {
  return (
    <>
      <a
        onClick={onClick}
        className={`btn ${className}`}
        target={target}
        href={href}
      >
        {children}
      </a>
    </>
  );
}
