export default function Logo({ children, className = "" }) {
  return (
    <>
      <a className={`btn ${className}`} href="#">
        {children}
      </a>
    </>
  );
}
