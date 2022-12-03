import Link from "next/link";
import styled, { css } from "styled-components";
import { Project } from "../data/projects";

const ProjectWrapper = styled.a`
  display: block;
  padding-left: 11rem;
  position: relative;
  min-height: 10rem;
  text-decoration: none !important;
  color: #ffffff;

  :hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;

  img {
    width: 100%;
    border-radius: 1rem;
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
const ProjectItem = (props: Project) => {
  return (
    <Link href={`/project/${props.url}`} passHref>
      <ProjectWrapper>
        <h3>{props.title}</h3>
        <Subtitle>{props.subtitle}</Subtitle>
        <Types>{props.types}</Types>
        <Icon>
          <img
            src={`/assets/projects/${props.icon}`}
            alt={`${props.title} project icon`}
          />
        </Icon>
      </ProjectWrapper>
    </Link>
  );
};

export default ProjectItem;
