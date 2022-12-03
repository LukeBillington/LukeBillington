import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = styled.div`
  background-color: #141414;
  color: #ffffff;
`;

const container = css`
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
`;

const Splash = styled.div`
  width: 100%;
  padding-top: 40%;
  background-image: url("assets/about-splash.jpg");
  background-size: cover;
`;

const Welcome = styled.section`
  color: #111111;
  background-color: #f6f6f6;
  justify-content: space-between;

  > div {
    ${container}
    display: flex;
  }

  @media only screen and (max-width: 767px) {
    > div {
      flex-wrap: wrap;
    }
  }
`;

const Stats = styled.div`
  order: 2;
  min-width: 25rem;
  margin-left: 3rem;

  > p:first-of-type {
    margin-top: 1rem;
  }

  a:nth-of-type(2) {
    display: block;
    background-color: #2687fb;
    color: #ffffff;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    border-radius: 5rem;
    margin: 3rem 0 1rem;
    :active {
      background-color: #1e6cc9;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (max-width: 767px) {
    text-align: center;
    order: 1;
    margin: 0;
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const Bio = styled.div<{ expanded: boolean }>`
  ${(props) => {
    const styles = [
      css`
        h2 {
          font-size: 3.6rem;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.2rem;
        }

        p {
          padding: 1rem 0;
          :not(:nth-of-type(1)) {
            display: none;
          }
        }

        button {
          display: block;
          padding: 0.5rem;
          border-radius: 5rem;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.05);
          cursor: pointer;
          color: #111111;

          :active {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }

        @media only screen and (max-width: 767px) {
          order: 2;
        }
      `,
    ];
    if (props.expanded) {
      styles.push(css`
        p {
          display: block !important;
        }

        button {
          display: none;
        }
      `);
    }
    return styles;
  }}
`;

const Skills = styled.section`
  background-color: #1a1a1a;
  color: #ffffff;
  font-weight: 300;

  > div {
    ${container}
  }

  dt {
    margin-top: 2rem;
    font-size: 1.4rem;
    text-transform: lowercase;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Milestones = styled.section`
  background-color: #101010;
  color: #ffffff;
  font-weight: 300;

  > div {
    ${container}
    position: relative;
    z-index: 500;

    ::after {
      content: "";
      position: absolute;
      width: 1rem;
      background: #2687fb;
      background: linear-gradient(to bottom, #2687fb 0%, #a343da 100%);
      z-index: -100;
    }
  }

  article {
    position: relative;
    background-color: #1a1a1a;
    border-radius: 1rem;
    padding: 1.5rem;

    h3 {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.5);
    }

    a {
      display: block;
      text-align: center;
      margin-top: 2rem;

      ::after {
        content: " >";
      }
    }

    img {
      position: absolute;
    }

    ::before {
      content: "";
      width: 2rem;
      height: 2rem;
      background-color: #ffffff;
      position: absolute;
      border-radius: 50%;
    }
  }

  ul {
    list-style: inside;
    padding-left: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      margin-left: 3rem;
    }

    > div::after {
      top: 0;
      bottom: 0;
      left: 1.5rem;
    }

    article {
      left: 3rem;
      width: calc(100% - 14rem);
      margin-top: 5rem;

      ::before {
        top: calc(50% - 1rem);
        right: calc(100% + 1rem);
      }
    }

    img {
      left: calc(100% + 1rem);
      top: calc(50% - 5rem);
      width: 10rem;
      border-radius: 1rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    > div::after {
      top: 20rem;
      bottom: 16rem;
      left: calc(50% - 0.5rem);
    }

    article {
      left: calc(20% - 3.5rem);
      margin-top: 3rem;
      width: 30%;

      :nth-of-type(2n) {
        left: calc(50% + 3.5rem);

        img {
          left: calc(100% + 2rem);
        }

        ::before {
          left: -4.5rem;
        }
      }

      :last-of-type {
        left: 35%;
        margin-top: 21rem;

        img {
          left: calc(50% - 7.5rem);
          top: -17rem;
        }

        ::before {
          display: none;
        }
      }

      ::before {
        top: calc(50% - 1rem);
        left: calc(100% + 2.5rem);
      }
    }

    img {
      right: calc(100% + 2rem);
      top: calc(50% - 7.5rem);
      width: 15rem;
      border-radius: 50%;
    }

    .About .milestones article:nth-of-type(2n)::before {
      left: -4.5rem;
    }

    .About .milestones article:last-of-type::before {
      display: none;
    }
  }
`;

export default function Page() {
  const [bioExpanded, setBioExpanded] = useState<boolean>(false);
  return (
    <About>
      <Head>
        <title>About | Luke Billington</title>
      </Head>
      <Navbar />
      <main>
        <Splash />
        <Welcome>
          <div>
            <Stats>
              <h1>Luke Billington</h1>
              <p>Software Engineer, F5 + NGINX</p>
              <p>Seattle, WA</p>
              <a href="mailto:lukecreative@me.com">lukecreative@me.com</a>
              {/* <a href="/resume.pdf" target="_blank">
                View resume
              </a>
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
              </ul> */}
            </Stats>
            <Bio expanded={bioExpanded}>
              <h2>About</h2>
              <p>
                I believe in taking a holistic approach to development, design,
                and engineering to create revolutionary entertainment
                technology. Everything I do starts with a story to tell.
                Although most of my work stems from development, I don&apos;t
                think an experience should stop at the screen, but should take
                full advantage of the environment. I use web technologies to
                bridge ideas and technologies to bring the story to life.
              </p>
              <p>
                One of the reasons I&apos;d say I stand out is that I&apos;m
                passionate about what I do. I&apos;m driven to the point that I
                won&apos;t stop until what I&apos;m working on is made right,
                and can engage others. There&apos;s absolutely nothing more
                satisfying about watching others interact with something you
                create, and they smile and even laugh. It&apos;s rewarding, and
                it drives me to create more things guests, fans, viewers,
                players, users — whomever the target audience — can enjoy.
              </p>
              <p>
                My philosophy is to create more than I consume. It&apos;s easy
                to sit back and watch a movie, but I have this constant urge to
                do more, to challenge myself a bit, to learn something new, and
                to make something. While a few of the projects I create are
                intended to make my life easier, ultimately the goal of most of
                my work I find, is to entertain others.
              </p>
              <p>
                Why? – It&apos;s my favorite question. In the back of my mind,
                I&apos;m usually trying to solve some sort of problem, and
                wondering how things can be improved or fixed, and with what.
                While most of the time I&apos;m exploring the intersection of
                technology and entertainment, I am also interested in how
                infrastructure and transportation plays a role. I believe how we
                communicate, connect and commute will be profoundly important in
                the future and how we progress forward, regardless of the
                industry. I don&apos;t believe in processes, I believe in
                problem-solving.
              </p>
              <p>
                I hope you truly enjoy your time on my site and find that it
                serves as a window into my life and what I do, and more
                importantly, why I do what I do. If you like what you see,
                please reach out, I&apos;m always wanting to be in touch with
                people who share the same interests, passions, and values.
              </p>
              <button onClick={() => setBioExpanded(true)}>
                Continue reading
              </button>
            </Bio>
          </div>
        </Welcome>
        <Skills>
          <div>
            <h2>Skills</h2>
            <dl>
              <dt>Programming languages</dt>
              <dd>JavaScript (ES6), PHP, Java, Python, C, C#, Swift</dd>
              <dt>Web technologies</dt>
              <dd>
                React, React Native, Node.js, Express.js, Laravel, Vue.js, SQL,
                MongoDB, Redis, Socket.io, OAuth, HTML (HTML5), CSS (CSS3),
                SASS, jQuery, WordPress
              </dd>
              <dt>Pro software</dt>
              <dd>
                Motion, Final Cut Pro, After Effects, Premiere Pro, Animate,
                Photoshop, Illustrator, XD, SketchUp
              </dd>
              <dt>Other skills</dt>
              <dd>
                User Experience & Interface Design, Motion Graphics, Streaming
                Media, Projection Mapping, 3D Modeling, Video Editing
              </dd>
            </dl>
          </div>
        </Skills>
        <Milestones>
          <div>
            <h2>Milestones</h2>
            <article>
              <h3>October 2019</h3>
              <p>
                I joined NGINX, which was acquired by F5. Moved temporarily to
                San Francisco to work on the NGINX Controller team. I now am
                working on revamping the NGINX documentation experience.
              </p>
              <img
                src="/assets/milestones/2019-10.jpg"
                alt="Luke in front of the Golden Gate Bridge."
              />
            </article>
            <article>
              <h3>June 2018</h3>
              <p>
                Moved to Seattle to start work as a Software Engineer at F5.
              </p>
              <img
                src="/assets/milestones/2018-6.jpg"
                alt="F5 Tower exterior."
              />
            </article>
            <article>
              <h3>February 2018</h3>
              <p>
                Graduated as Valedictorian from Full Sail University with a B.S.
                in Web Development.
              </p>
              <img
                src="/assets/milestones/2018-2.jpg"
                alt="Luke in graduation gown."
              />
            </article>
            <article>
              <h3>November 2017</h3>
              <p>Introduced Lukeflix at a development showcase.</p>
              <p>
                <Link href="/video/showcase-2017">Watch</Link>
              </p>
              <img
                src="/assets/milestones/2017-11.jpg"
                alt="Luke presenting on stage."
              />
            </article>
            <article>
              <h3>November 2016</h3>
              <p>Demonstrated Battlegrounds in a development showcase.</p>
              <p>
                <Link href="/video/showcase-2016">Watch</Link>
              </p>
              <img
                src="/assets/milestones/2016-11.jpg"
                alt="Luke presenting on stage."
              />
            </article>
            <article>
              <h3>June 2016</h3>
              <p>Started School at Full Sail University.</p>
              <img
                src="/assets/milestones/2016-6.jpg"
                alt="Luke in front of Full Sail Live venue."
              />
            </article>
            <article>
              <h3>January 2016</h3>
              <p>
                Completed my Disney College Program as a Cast Member at Space
                Mountain. It was a blast!
              </p>
              <img
                src="/assets/milestones/2016-1.jpg"
                alt="Space Mountain with clouds in the sky."
              />
            </article>
            <article>
              <h3>February 2015</h3>
              <p>
                Moved to Florida to participate in the Disney College Program.
              </p>
              <img
                src="/assets/milestones/2015-2.jpg"
                alt="Luke in front of Cinderella Castle."
              />
            </article>
            <article>
              <h3>August 2013</h3>
              <p>
                Started School at the University of Nebraska-Lincoln majoring in
                Computer Science & Engineering. Also began an internship at
                HuskerVision, animating, filming and operating live production
                software for live Husker sports events.
              </p>
              <img
                src="/assets/milestones/2013-8.jpg"
                alt="Luke in the press box suites of Memorial Stadium."
              />
            </article>
            <article>
              <h3>June 2013</h3>
              <p>
                Traveled on tour in Europe with the Nebraska Ambassadors of
                Music.
              </p>
            </article>
            <article>
              <h3>August 2012</h3>
              <p>
                Formed Vortechs, a group to animate my high school’s sports
                displays.
              </p>
              <img
                src="/assets/milestones/2012-8.jpg"
                alt="Scoreboard with Luke displayed on it."
              />
            </article>
            <article>
              <h3>July 2012</h3>
              <p>Attended Peter Keiwit Institute programs:</p>
              <ul>
                <li>Cyber & Information Assurance</li>
                <li>Modeling and Simulation</li>
                <li>Sustainable Environment & Renewable Energy</li>
              </ul>
            </article>
            <article>
              <h3>October 2011</h3>
              <p>Designed a haunted house out of the garage.</p>
              <p>
                <Link href="/project/lwhs">Learn more</Link>
              </p>
              <img
                src="/assets/milestones/2011-10.jpg"
                alt="A garage turned into a haunted house."
              />
            </article>
            <article>
              <h3>July 2010</h3>
              <p>
                Created a website for my high school band. It’s shockingly still
                up and going.
              </p>
              <p>
                <Link href="/project/eshs-band">Learn more</Link>
              </p>
              <img
                src="/assets/milestones/2010-7.jpg"
                alt="Luke in marching band uniform holding trombone looking up into the blue sky."
              />
            </article>
            <article>
              <h3>October 2009</h3>
              <p>Serious upgrade to a 27” iMac. Creativity ensues.</p>
              <img
                src="/assets/milestones/2009-10.jpg"
                alt="Luke with an iMac computer."
              />
            </article>
            <article>
              <h3>February 2009</h3>
              <p>
                Started LukeCreative to do freelance video, web and design work
                for several startups, foundations, and businesses.
              </p>
            </article>
            <article>
              <h3>January 2007</h3>
              <p>
                Attended the MacWorld Keynote when the iPhone was introduced.
                The world was forever changed.
              </p>
              <img
                src="/assets/milestones/2007-1.jpg"
                alt="Luke in front of the Golden Gate Bridge."
              />
            </article>
            <article>
              <h3>May 2006</h3>
              <p>
                With enough kicks and punches, I earned my black belt in
                Taekwondo.
              </p>
              <img
                src="/assets/milestones/2006-5.jpg"
                alt="Luke performing a high kick."
              />
            </article>
            <article>
              <h3>February 2001</h3>
              <p>
                Enjoyed my first trip to Walt Disney World. I then knew what I
                wanted to do when I grew up. I also watched the Atlantis space
                shuttle launch of STS-98.
              </p>
              <img
                src="/assets/milestones/2001-2.jpg"
                alt="Luke with Minnie Mouse."
              />
            </article>
            <article>
              <h3>August 2000</h3>
              <p>
                Piano became my creative outlet. I still haven’t stopped
                playing.
              </p>
              <img
                src="/assets/milestones/2000-8.jpg"
                alt="Aerial view of Luke playing piano."
              />
            </article>
            <article>
              <h3>A long time ago</h3>
              <p>It all started with a Mac. I haven’t changed.</p>
              <img
                src="/assets/milestones/a-long-time-ago.jpg"
                alt="Luke as a baby with an Apple computer."
              />
            </article>
          </div>
        </Milestones>
      </main>
      <Footer />
    </About>
  );
}
