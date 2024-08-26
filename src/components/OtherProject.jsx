import Image from "./Image";

function OtherProject(prop) {
  const project = prop.project;

  return (
    <>
      <div key={project.id} className="child position-relative">
        <a href={project.link.project} className="image-parent rounded">
          {/* <Image
            url={project.project_showcase.is_other.image}
            alt={project.name}
          /> */}
          <img src="image/shopeeling.jpg" alt="" />
          <div className="image-design"></div>
        </a>
        <p className="text-center my-3 text-light text-capitalize">
          {project.name}
        </p>
      </div>
    </>
  );
}

export default OtherProject;
