import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const LukeAir = styled.div``;

export default function Page() {
  const project = projects[9];
  return (
    <ProjectLayout {...project}>
      <LukeAir>
        <section>
          <div>
            <p>
              For my Emerging Interface Design course I designed an app for a
              fictitious airline and later enhanced the designs for my Interface
              and Usability Course. Market research was completed on various
              similar applications of competing applications. The goal was to
              design with multiple interfaces in mind, including tablets, smart
              phones, and watches. The mockups were designed as low-fidelity
              sketches and then translated into Adobe Illustrator and later
              re-created as high-fidelity interactive prototypes with
              improvements using Adobe XD. The designs were refined with
              user-testing.
            </p>
            <p>
              Yes, you can actually play with this prototype! It is just that, a
              prototype, to illustrate interface concepts, not a working
              version.
            </p>
            <div className="media">
              <figure>
                <div className="frame-5s">
                  <iframe
                    title="LukeAir Interactive Prototype"
                    className="inside"
                    src="https://xd.adobe.com/embed/ece7d21b-e560-4a20-8cc5-7383406b4d4b"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <figcaption className="interactive">
                  LukeAir interactive prototype.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </LukeAir>
    </ProjectLayout>
  );
}
