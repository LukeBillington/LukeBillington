import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Project } from "../data/projects";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProjectWrapper = styled.div`
  background-color: #141414;
  color: #ffffff;
`;

const Splash = styled.div<{ image: string }>`
  width: 100%;
  padding-top: 35%;
  background-size: cover;
  position: relative;
  background-image: ${(props) => `url("/assets/projects/${props.image}")`};

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const Meta = styled.section`
  background-color: #141414;

  > div {
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 1rem 2rem 24rem;
    position: relative;

    @media only screen and (max-width: 599px) {
      margin-left: auto;
      margin-right: auto;
      padding: 6rem 1rem 2rem 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

const Icon = styled.div`
  width: 20rem;
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;

  @media only screen and (max-width: 599px) {
    position: absolute;
    width: 10rem;
    top: -5rem;
    left: calc(50% - 5rem);
  }

  img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 599px) {
      border-radius: 1rem;
    }
  }
`;

const metadata = css`
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  font-size: 1.4rem;
`;

const Subtitle = styled.p`
  ${metadata}
`;

const Types = styled.p`
  ${metadata}
`;

const Description = styled.section`
  background-color: #1a1a1a;

  p {
    padding: 1rem 0;
  }

  section {
    > div {
      max-width: 96rem;
      margin-left: auto;
      margin-right: auto;
      padding: 5rem 1rem;
      position: relative;
    }

    .media {
      padding: 0 1rem 2rem 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    :nth-last-of-type(2n) {
      background-color: #101010;
    }
  }

  img,
  video,
  iframe {
    max-width: 100%;
  }

  figcaption {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    padding: 1rem 0;
    font-weight: 300;
  }

  .interactive {
    margin-top: -1.5rem;
    padding: 0 0 1rem 0;
  }

  .frame-5s {
    width: 357px;
    height: 640px;
    position: relative;
    background-image: url("/assets/frame-5s.png");
    background-size: contain;
  }

  .inside {
    position: absolute;
    top: 101px;
    left: 58px;
    width: 240px;
    height: 426px;
    z-index: 500;
  }

  @media only screen and (max-width: 599px) {
    section > div {
      padding: 3rem 1rem;
    }

    .frame-5s {
      margin-left: auto;
      margin-right: auto;
      width: 240px;
      height: 426px;
      position: relative;
      background: none;

      .inside {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .interactive {
      margin-top: 0;
      padding: 1rem 0;
    }

    figure {
      width: 100%;
      overflow: hidden;
    }
  }
`;

const ProjectLayout = (props: Project & { children: ReactNode }) => {
  return (
    <ProjectWrapper>
      <Head>
        <title>{props.title} | Luke Billington</title>
      </Head>
      <Navbar />
      <main>
        <Splash image={props.splash} />
        <Meta>
          <div>
            <h1>{props.title}</h1>
            <Subtitle>{props.subtitle}</Subtitle>
            <Types>{props.types}</Types>
            <Icon>
              <img src={`/assets/projects/${props.icon}`} alt="Project icon" />
            </Icon>
          </div>
        </Meta>
        <Description>{props.children}</Description>
      </main>
      <Footer />
    </ProjectWrapper>
  );
};

export default ProjectLayout;
