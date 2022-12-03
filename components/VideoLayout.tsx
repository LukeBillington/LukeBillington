import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Video } from "../data/videos";
import Footer from "./Footer";
import Navbar from "./Navbar";

const VideoWrapper = styled.div`
  background-color: #141414;
  color: #ffffff;
  padding-top: 5rem;

  main {
    background-color: #101010;
  }
`;

const Player = styled.section`
  width: 100%;
  padding-top: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Meta = styled.section`
  max-width: 96rem;
  padding: 4rem 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  margin-top: 3rem;

  p {
    padding: 1rem 0;
  }

  dt {
    margin-top: 1rem;
  }

  dd {
    color: rgba(255, 255, 255, 0.5);
    margin-left: 1rem;
    font-weight: 300;
  }
`;

const VideoLayout = (props: Video & { children: ReactNode }) => {
  return (
    <VideoWrapper>
      <Head>
        <title>{props.title} | Luke Billington</title>
      </Head>
      <Navbar />
      <main>
        <Player>
          <iframe
            src={
              "https://www.youtube.com/embed/" +
              props.youtubeId +
              "?autoplay=1&rel=0"
            }
            title={props.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Player>
        <Meta>
          <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <Content>{props.children}</Content>
          </div>
        </Meta>
      </main>
      <Footer />
    </VideoWrapper>
  );
};

export default VideoLayout;
