import styled, { css } from "styled-components";

const FooterWrapper = styled.footer`
  font-size: 1.4rem;

  > div {
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  h2 {
    font-size: 1.8rem;

    :nth-of-type(2) {
      margin-top: 2rem;
    }
  }
`;

const breakpoint = css`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

const About = styled.div`
  width: calc(100% - 28rem);
  margin-bottom: 3rem;
  ${breakpoint}
`;

const Contact = styled.div`
  width: 25rem;
  margin-left: 3rem;
  margin-bottom: 3rem;
  ${breakpoint}
`;

const Copyright = styled.div`
  width: 100%;
  font-size: 1.4rem;
  opacity: 0.5;
  ${breakpoint}
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <About>
          <h2>Hello, I&apos;m Luke</h2>
          <p>
            I have an unparalleled love of bringing immersive stories to life by
            taking a holistic approach to my work. Although being a full-stack
            web developer and DevOps engineer, I often find myself working at
            the intersection of technology and entertainment. I gladly invite
            you to connect with me to create something out of this world.
          </p>
        </About>
        <Contact>
          <h2>Email</h2>
          <a href="mailto:lukecreative@me.com">lukecreative@me.com</a>
          <h2>Connect</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/lukecreative"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lukebillington"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LukeBillington"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Contact>
        <Copyright>
          <p>© {new Date().getFullYear()}, Luke Billington.</p>
        </Copyright>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
