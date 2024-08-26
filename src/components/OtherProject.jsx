import Image from "./Image";

function OtherProject(prop) {
  const project = prop.project;

  return (
    <>
      <div key={project.id} className="child position-relative">
        <a href={project.link.project} className="image-parent rounded">
          <Image
            url={`${project.project_showcase.url}${project.project_showcase.is_other.image}`}
            alt={project.name}
          />
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
