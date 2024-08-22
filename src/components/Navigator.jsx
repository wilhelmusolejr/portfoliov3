import Logo from "./Logo";
import { useLocation } from "react-router-dom";

export default function Navigator() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  console.log(path);
  console.log("projects".includes(path));

  const pathSegments = location.pathname.split("/");

  if (location.pathname == "/") {
    return (
      <>
        <nav className="fs-4 position-fixed w-100 ">
          <div className="container d-flex justify-content-between">
            <Logo />
            <div>
              <a className="text-light-white" href="/about">
                About
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="fs-4 position-fixed w-100 ">
        <div className="container d-flex justify-content-between">
          <Logo />

          <div className="d-flex gap-4 text-capitalize">
            <a
              href="/about"
              className={`${path != "about" ? "text-light-white" : ""}`}
            >
              About
            </a>
            <a
              href="/projects"
              className={`${
                !"projects".includes(path) ? "text-light-white" : ""
              }`}
            >
              Projects
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
