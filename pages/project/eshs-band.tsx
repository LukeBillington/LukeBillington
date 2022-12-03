import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const ESHSBand = styled.div``;

export default function Page() {
  const project = projects[11];
  return (
    <ProjectLayout {...project}>
      <ESHSBand>
        <section>
          <div>
            <p>
              The Elkhorn South High School Bands/Marching Blue and Gold website
              was one of my very first major web applications I had created,
              just as HTML5 and CSS3 was rolling out. As my school district was
              opening a new high school I would be moving to, my band director
              needed a new website she could easily manage.
            </p>
            <p>
              In addition to the website, I hand-built a custom content
              management system (CMS) using JavaScript and PHP to save updates
              to a flat-files as a database wasn’t an option. Though much has
              changed in the world of the web in the last many years, I am still
              very proud of this site.
            </p>
          </div>
        </section>
      </ESHSBand>
    </ProjectLayout>
  );
}
