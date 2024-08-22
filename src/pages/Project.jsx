import Navigator from "../components/Navigator";

// asset
import philippinecurrency from "../assets/projects/Portfolio/philippinecurrency.jpg";
import gcash_bot from "../assets/projects/Portfolio/gcash_bot.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faLaravel, faPython } from "@fortawesome/free-brands-svg-icons";

import "../css/project.css";
import Footer from "../components/Footer";

export default function Project() {
  return (
    <>
      <Navigator />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <div className="container">
          <a
            href="/projects"
            className=" d-flex gap-2 align-items-center text-decoration-none text-light-white"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <p>Back</p>
          </a>
          <h1 className="text-light">Philippine Currency Identifier</h1>
        </div>
      </section>

      <section className="project-intro">
        <div className="container ">
          <div className="image-parent my-5 flex-center">
            <img src={gcash_bot} alt="" />
          </div>

          <div className="project-info">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              voluptas quaerat explicabo sint asperiores temporibus a unde nam,
              neque iusto!
            </p>

            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ullam labore ipsum necessitatibus saepe, maxime deserunt
              repellendus! Delectus, error ipsam culpa labore eaque nam
              quibusdam unde neque consequatur omnis earum.
            </p>
          </div>

          <div className="project-features mt-5">
            <h2 className="mb-4 text-light">Features</h2>
            <ul className=" d-flex flex-column gap-2">
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quisquam consequatur harum quibusdam sapiente? Dolore, animi
                  rem. Illo, itaque. Quidem tenetur expedita velit ipsam atque
                  enim, dolor magnam aperiam. Architecto!
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  possimus eius iste, ea dicta doloremque eaque cum quos
                  praesentium, alias quisquam, suscipit cupiditate repellat
                  laudantium.
                </p>
              </li>
            </ul>
          </div>

          <div className="project-technology my-5">
            <div className="flex-center gap-2 text-light">
              <div className="child flex-center">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <div className="child flex-center">
                <FontAwesomeIcon icon={faLaravel} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid project-design py-5">
        <div className="container flex-center">
          <div className="box d-flex border p-3">
            {/* left */}
            <div className="left d-flex flex-column justify-content-between">
              <p className="fs-1 font text-light">Poppins</p>
              <div className="w-100">
                <div className="d-flex flex-row gap-1">
                  <div className="frac"></div>
                  <div className="frac"></div>
                </div>
                <ul className="d-flex flex-wrap gap-3 list-unstyled ps-2 pt-2">
                  <li className=" d-flex align-items-center gap-2">
                    <div className="circle rounded-circle"></div>
                    <p>Javascript</p>
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div className="circle rounded-circle"></div>
                    <p>html</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className="right colors d-flex flex-column gap-2">
              <div className="color-box"></div>
              <div className="color-box"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
