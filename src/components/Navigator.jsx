import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigator() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  if (location.pathname == "/") {
    return (
      <>
        <nav className="fs-4 position-fixed w-100 ">
          <div className="container d-flex align-items-center justify-content-between">
            <Logo />

            <div className="d-none gap-4 text-capitalize d-md-flex">
              <a href="/about" className="text-light-white">
                About
              </a>
              <a href="/projects" className="text-light-white">
                Projects
              </a>
            </div>

            {/* bar */}
            <FontAwesomeIcon
              icon={faBars}
              className="dropdown-toggle d-block d-md-none text-light-white"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />

            {/* ABOUT */}
            {/* for mobile */}
            <ul
              className="dropdown-menu w-100 text-white container d-md-none"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a href="/about" className={`text-light-white`}>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className={`text-light-white`}>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="fs-4 position-fixed w-100 ">
        <div className="container d-flex align-items-center justify-content-between">
          <Logo />

          <div className="d-none gap-4 text-capitalize d-md-flex">
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
            <a
              href="https://drive.google.com/file/d/1OYfzSr7biSVoiTU052svmt24gvcfev4p/view"
              target="_blank"
              className="btn btn-primary ms-5"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* bar */}
          <FontAwesomeIcon
            icon={faBars}
            className="dropdown-toggle d-block d-md-none text-light-white"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />

          {/* ABOUT */}
          {/* for mobile */}
          <ul
            className="dropdown-menu w-100 text-white container d-md-none"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                href="/about"
                className={`${path != "about" ? "text-light-white" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`${
                  !"projects".includes(path) ? "text-light-white" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li className="mt-3">
              <a
                href="https://drive.google.com/file/d/1OYfzSr7biSVoiTU052svmt24gvcfev4p/view"
                target="_blank"
                className="btn btn-primary"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
