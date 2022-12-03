import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = styled.div`
  background-color: #f6f6f6;
  color: #111111;
`;

const Splash = styled.div`
  width: 100%;
  padding-top: 40%;
  background-image: url("assets/home-splash.jpg");
  background-size: cover;
`;

const Welcome = styled.section`
  color: #111111;
  background-color: #f6f6f6;
  text-align: center;

  > div {
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    word-spacing: 1.2rem;
  }

  li {
    font-size: 1.8rem;
    display: inline-block;
    padding: 2rem 2rem 0 2rem;
  }

  a::after {
    content: " >";
  }
`;

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;

  .lukeflix {
    background-image: url("/assets/home-lukeflix.jpg");
  }
  .uno {
    background-image: url("/assets/home-uno.jpg");
  }
  .showcase-17 {
    background-image: url("/assets/home-showcase.jpg");
  }
  .luketopia {
    background-image: url("/assets/home-luketopia.jpg");
  }

  > a {
    display: inline-block;
    position: relative;
    color: #ffffff;
    cursor: pointer;
    background-size: cover;

    @media only screen and (max-width: 599px) {
      width: 100%;
      padding-top: 70%;
      background-position: center;
    }

    @media only screen and (min-width: 600px) {
      width: 50%;
      padding-top: 40%;
    }

    @media only screen and (min-width: 1024px) {
      width: 25%;
      padding-top: 18%;
    }

    > div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding-top: 1.5rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-weight: 300;
      font-size: 1.4rem;
    }
  }
`;

export default function Page() {
  return (
    <Home>
      <Head>
        <title>Luke Billington</title>
      </Head>
      <Navbar />
      <main>
        <Splash />
        <Welcome>
          <div>
            <h1>Develop. Design. Engineer. Innovate.</h1>
            <p>
              I&apos;m passionate about taking a holistic approach to my work:
              creating revolutionary entertainment technology that brings the
              most magical stories to life.
            </p>
            <ul>
              <li>
                <Link href="/portfolio">See my work</Link>
              </li>
              <li>
                <Link href="/about">Learn more</Link>
              </li>
            </ul>
          </div>
        </Welcome>
        <Cards>
          <Link href="/project/luketopia" className="luketopia">
            <div>
              <h2>Luketopia</h2>
              <p>Theme park app built in a month</p>
            </div>
          </Link>
          <Link href="/project/uno" className="uno">
            <div>
              <h2>Cards with Vue.js</h2>
              <p>An UNO-inspired game</p>
            </div>
          </Link>
          <Link href="/video/showcase-2017" className="showcase-17">
            <div>
              <h2>2017 Dev Showcase</h2>
              <p>Introducing Lukeflix and other projects</p>
            </div>
          </Link>
          <Link href="/project/lukeflix" className="lukeflix">
            <div>
              <h2>Lukeflix</h2>
              <p>Watch with friends</p>
            </div>
          </Link>
        </Cards>
      </main>
      <Footer />
    </Home>
  );
}
