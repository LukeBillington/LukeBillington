import Link from "next/link";
import styled from "styled-components";
import { Video } from "../data/videos";

const VideoWrapper = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-decoration: none !important;
  color: #ffffff;

  :hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Thumbnail = styled.div`
  order: 1;
  width: 100%;

  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const Title = styled.h3`
  order: 2;
`;

const Subtitle = styled.p`
  order: 4;
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  font-size: 1.4rem;
`;

const Duration = styled.p`
  order: 3;
`;

const VideoItem = (props: Video) => {
  return (
    <Link href={`/video/${props.url}`} passHref>
      <VideoWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Duration>{props.duration}</Duration>
        <Thumbnail>
          <img
            src={`/assets/videos/${props.thumbnail}`}
            alt={`${props.title} video thumbnail`}
          />
        </Thumbnail>
      </VideoWrapper>
    </Link>
  );
};

export default VideoItem;
