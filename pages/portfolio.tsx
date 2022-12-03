import Head from "next/head";
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";
import VideoItem from "../components/VideoItem";
import projects from "../data/projects";
import videos from "../data/videos";

const Portfolio = styled.div`
  background-color: #101010;
  color: #ffffff;
  padding-top: 5rem;

  p {
    font-weight: 300;
  }
`;

const container = css`
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
`;

const list = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const listItem = css`
  padding-top: 3rem;
`;

const Presentations = styled.section`
  > div {
    ${container}
  }

  ul {
    ${list}
  }

  li {
    ${listItem}
  }

  @media only screen and (max-width: 767px) {
    li {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    li {
      width: calc(50% - 1.5rem);
    }
  }
`;

const Projects = styled.section`
  > div {
    ${container}
  }

  ul {
    ${list}
  }

  li {
    ${listItem}
  }

  @media only screen and (max-width: 599px) {
    li {
      width: 100%;
    }
  }

  @media only screen and (min-width: 600px) {
    li {
      width: calc(50% - 1.5rem);
    }
  }

  @media only screen and (min-width: 960px) {
    li {
      width: calc((100% / 3) - 3rem);
    }
  }
`;

export default function Page() {
  return (
    <Portfolio>
      <Head>
        <title>Portfolio | Luke Billington</title>
      </Head>
      <Navbar />
      <main>
        <Presentations>
          <div>
            <h2>See what I do</h2>
            <p>Recent presentations showcasing my work</p>
            <ul>
              {videos.map((video) => (
                <li key={video.url}>
                  <VideoItem {...video} />
                </li>
              ))}
            </ul>
          </div>
        </Presentations>
        <Projects>
          <div>
            <h2>Projects</h2>
            <p>Noteworthy personal and school projects</p>
            <ul>
              {projects.map((project) => (
                <li key={project.url}>
                  <ProjectItem {...project} />
                </li>
              ))}
            </ul>
          </div>
        </Projects>
      </main>
      <Footer />
    </Portfolio>
  );
}
