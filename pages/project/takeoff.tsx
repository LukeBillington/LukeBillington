import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const Takeoff = styled.div``;

export default function Page() {
  const project = projects[10];
  return (
    <ProjectLayout {...project}>
      <Takeoff>
        <section>
          <div>
            <p>
              Originally My Full Sail Experience, Takeoff is a mockup community
              portal for students. For one of my design courses at Full Sail, I
              wanted to push myself with creating an app prototype that would
              help other students. A problem I’ve noticed at multiple
              institutions is a variety of portals and platforms for students
              for different areas, each with different calendars, message
              inboxes and such and I wanted to design a way to consolidate them
              and help with other life tasks like finding roommates and
              notifying students of upcoming meetings and classes.
            </p>
            <p>
              This project had many design iterations and names. It focused on
              style guide creation, user testing, and rapid prototyping. Each
              week over a month, two presentations were expected showcasing
              competitive analysis, user feedback and a fast turnaround on
              design improvements with as little as an hour.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Earlier prototypes</h2>
            <p>
              My first approach was to create a basic app with a hamburger menu,
              showing all of the options, it provided quite a bit of
              flexibility, but getting users to explore each area of the app was
              a bit difficult. Also, users felt the interface seemed a bit dark.
              In some of my later iterations, I opted for more of an
              onboard-heavy flow, however with this sacrificed much control by
              the users.
            </p>
            <p>
              Yes, you can actually play with these prototypes! They are just
              that, prototypes, to illustrate interface concepts, not working
              versions.
            </p>
          </div>
          <div className="media">
            <figure>
              <div className="frame-5s">
                <iframe
                  title="Takeoff V1 Interactive Prototype"
                  className="inside"
                  src="https://xd.adobe.com/embed/e92d5c16-a71b-480e-af5a-0ef2681e3dd9"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <figcaption className="interactive">
                Takeoff interactive prototype version 1.
              </figcaption>
            </figure>
            <figure>
              <div className="frame-5s">
                <iframe
                  title="Takeoff V2 Interactive Prototype"
                  className="inside"
                  src="https://xd.adobe.com/embed/4aac7e90-4af0-446d-aa9e-b46171f2acc3"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <figcaption className="interactive">
                Takeoff interactive prototype version 2.
              </figcaption>
            </figure>
          </div>
        </section>
        <section>
          <div>
            <h2>Rounding it out</h2>
            <p>
              It turns out some of my earlier concepts were rather spot-on, and
              as I began changing minor details, it became faster to use SASS
              and HTML to implement these changes. I ended up also working with
              the Materialize CSS framework to help speed things up.
            </p>
          </div>
        </section>
      </Takeoff>
    </ProjectLayout>
  );
}
