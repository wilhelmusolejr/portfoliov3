// Asset imports
import "../css/projects.css";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import { projects } from "../ProjectData";
import OtherProject from "../components/OtherProject";
import PinProject from "../components/PinProject";

export default function Project() {
  document.title = "Projects | Wilhelmus Ole";

  const allProjects = projects();
  const projects_data = allProjects[0];
  const pin_projects_data = allProjects[1];

  return (
    <>
      <Navigator />

      <section className="container-fluid project-page">
        <div className="container">
          <h2 className="py-5 text-light text-center">Projects</h2>

          <div className="parent d-flex flex-wrap gap-5">
            {pin_projects_data.map((project, index) => (
              <PinProject key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container-fluid project">
        <div className="container">
          <h2 className="text-center mb-5 text-light">Other projects</h2>

          <div className="d-flex parent flex-wrap justify-content-center">
            {projects_data.map((project, index) => (
              // <img src={} alt="" />
              <OtherProject key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
