export default function Logo({
  children,
  className = "",
  href = "#",
  target = "",
}) {
  return (
    <>
      <a className={`btn ${className}`} target={target} href={href}>
        {children}
      </a>
    </>
  );
}
