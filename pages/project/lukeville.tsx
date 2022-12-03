import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const LukeVille = styled.div``;

export default function Page() {
  const project = projects[8];
  return (
    <ProjectLayout {...project}>
      <LukeVille>
        <section>
          <div>
            <p>
              For my Interface and Usability Course course I designed a
              companion app for a fictitious theme park in the span of one week
              using Adobe XD. In a later course, I based Luketopia from this to
              make it function as a web, and mobile application. All photos were
              taken by myself.
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
                    title="LukeVille Interactive Prototype"
                    className="inside"
                    src="https://xd.adobe.com/embed/a3e57af3-9e8b-4878-8546-8d6f1f502d74"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <figcaption className="interactive">
                  LukeVille interactive prototype.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </LukeVille>
    </ProjectLayout>
  );
}
