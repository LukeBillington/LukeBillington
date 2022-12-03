import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const Lukeflix = styled.div`
  #imgAbout,
  #imgHome {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;

    img {
      border-radius: 1rem;
    }
  }

  #imgCli {
    width: 50%;
    float: right;
    margin-top: 2rem;
    margin-bottom: 2rem;

    figcaption {
      margin-top: -5rem;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      float: none;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export default function Page() {
  const project = projects[0];
  return (
    <ProjectLayout {...project}>
      <Lukeflix>
        <section>
          <div>
            <p>
              Imagining a world without Netflix and video streaming is hard.
              Video content is everywhere and the world is consuming more and
              more of it each day. Unfortunately, video streaming doesn’t work
              too well without internet. After finding myself stuck in a
              situation where my best connection was a 2G hotspot, I decided to
              do something about it. Enter Lukeflix.
            </p>
            <figure id="imgAbout">
              <img src="/assets/lukeflix/about.png" alt="Movie information" />
              <figcaption>Movie information.</figcaption>
            </figure>
            <p>
              Lukeflix is a multi-platform video library and local streaming
              service. Originally designed for web browsers, it currently is
              also in development for iOS, tvOS and a remote for watchOS. I have
              no plans on actually releasing it, however, it’s a great project
              to test my skills in a variety of technical platforms.
            </p>
          </div>
        </section>
        <section>
          <div>
            <figure id="imgCli">
              <img src="/assets/lukeflix/cli.png" alt="Lukeflix installer" />
              <figcaption>Lukeflix installer.</figcaption>
            </figure>
            <h2>How it works</h2>
            <p>
              Lukeflix is rather simple to use. Just select folders or external
              drives to load movies from. Then, ensure that the movie filenames
              follow a certain naming convention: “Movie Title (Year).mp4”.
              Lukeflix will scan through each file and find all the movies and
              match them with The Movie Database (TMDb) to gather cast, artwork,
              and other information, and display it all inside a gorgeous
              interface. Watching a movie or getting information is only a click
              or tap away. Currently the installer is in the console, however,
              an interface for this will be created in the near future.
            </p>
          </div>
        </section>
        <section>
          <div>
            <figure id="imgHome">
              <img src="/assets/lukeflix/home.png" alt="Movie browser" />
              <figcaption>485 successfully matched movies.</figcaption>
            </figure>
            <h2>The perfect match</h2>
            <p>
              One of the biggest challenges when constructing Lukeflix was
              matching movies to online content. I opted to work with The Movie
              Database as they provide a very high-quality and well-documented
              API to find movie information and artwork. I constructed a
              recursive file-reading script to scan through folders and identify
              each movie. Having two keys to search by – title, and year
              – helped improve the matching accuracy significantly. Of course,
              the API has a limit on calls, so I needed to find a way to run
              this task in the background. I ended up creating a task runner to
              handle these requests with a proper throttle and shipped them with
              events on my socket server to send real-time information up to the
              interface.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Watch with friends</h2>
            <p>
              What’s so great about watching a movie, when you’ve got nobody to
              watch it with? Gone are the days of trying to sync up the seconds
              after every pause or buffer. Even if you are a lone-watcher,
              playing to multiple devices simultaneously is also quite amazing.
              Lukeflix was one of my first impressions and integrations with
              sockets: the same technology that powers many multiplayer games. I
              was beyond impressed with the power that came with using them. I
              was now able to trigger video playback events, such as playing,
              pausing and more.
            </p>
            <p>
              I may have gotten carried away, but it’s nice now to have a player
              I can sync multiple devices up to play the same video at the same
              time. Having this data, I’ve found can mean much more, especially
              in creating apps that can function as a remote, and even
              determining movie suggestions based off of what parts were watched
              and skipped. Without initially realizing it, I built a solid API
              platform, not only for a personal movie catalog but also for
              real-time events using sockets.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Empowering a smart home</h2>
            <p>
              It's one thing to have an app that plays movies or have an app
              that can turn on and off lights. But what if one app can do both,
              in context? Using the socket platform as a foundation, users can
              now tap on a movie to turn off the lights and set the scene for a
              movie and they automatically turn on again during credits, just
              like the theaters! It's magical. Lukeflix can control beyond
              lights too! Any device controllable with an API could be connected
              in some form. In the future I see this going a step further, just
              like how movies have video and audio tracks, movie producers could
              add light tracks, and even temperature tracks to video to control
              the temperature of a room to match the scene.
            </p>
          </div>
        </section>
      </Lukeflix>
    </ProjectLayout>
  );
}
