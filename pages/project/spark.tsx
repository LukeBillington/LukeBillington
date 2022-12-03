import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const Spark = styled.div``;

export default function Page() {
  const project = projects[6];
  return (
    <ProjectLayout {...project}>
      <Spark>
        <section>
          <div>
            <p>
              In the worlds of social media, marketing, and design, you only
              have a few seconds for your brand to capture someone’s attention.
              This also applies when your brand is yourself.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Share your story</h2>
            <p>
              I personally believe everything starts with a story, so I wanted
              to tell mine on a profile of mine. Having only six photo areas and
              a short description area below, I had to make the most of it.
            </p>
            <p>
              One thing I’ve learned from working in theme parks and studying
              airports and other facilities that have to process many people is
              that when people see a sign, they’ll often slow down to read it.
              In the case of airports and theme parks, that might not be the
              best situation, however, applying this to people checking out a
              profile, slowing users down to read your story is the ideal
              result. I applied it with much success and wanted to create an app
              that could allow others to easily create their own images for
              visual storytelling.
            </p>
            <p>
              Using Spark couldn’t be simpler, just login with Instagram, choose
              a photo and add text and download!
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>The tech side</h2>
            <p>
              Spark was created for a class in just under a month while battling
              against the storm of Hurricane Irma. Although the course only
              required a web application that used an external API, I wanted to
              push myself to pick up React Native to create a native mobile
              application and even deploy it to Test Flight on iOS.
            </p>
          </div>
        </section>
      </Spark>
    </ProjectLayout>
  );
}
