import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const LWHS = styled.div`
  #imgFront,
  #imgInside {
    width: 45%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  #imgGarage,
  #vidGeneric {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  #imgFront img,
  #imgInside img,
  #imgGarage img,
  #vidGeneric video {
    border-radius: 1rem;
  }

  @media only screen and (max-width: 599px) {
    #imgFront,
    #imgInside,
    #imgGarage,
    #vidGeneric {
      width: 100%;
    }
  }
`;

export default function Page() {
  const project = projects[7];
  return (
    <ProjectLayout {...project}>
      <LWHS>
        <section>
          <div>
            <p>
              Halloween has always been one of my favorite holidays. It’s a
              tradition to carve pumpkins, visit the pumpkin patch and have a
              fun, fright-filled fall festival. But that didn’t stop me from
              pushing it even further, all while working within budgets and
              available resources.
            </p>
          </div>
          <div className="media">
            <figure id="imgFront">
              <img src="/assets/lwhs/front.png" alt="Front of haunted house" />
              <figcaption>Front castle.</figcaption>
            </figure>
            <figure id="imgInside">
              <img src="/assets/lwhs/inside.png" alt="Inside" />
              <figcaption>Inside effects.</figcaption>
            </figure>
          </div>
        </section>
        <section>
          <div>
            <h2>The beginnings</h2>
            <p>
              From the early years, it started with building a haunted house out
              of the garage using PVC piping and trash bags. With the help of my
              family, we decorated it with special lights, props, speakers, and
              Lego Mindstorms robotics to control effects. Every year, the
              neighborhood would check out our creation, and we were even
              mentioned in the local papers.
            </p>
            <figure id="imgGarage">
              <img src="/assets/lwhs/garage.png" alt="Inside the garage" />
              <figcaption>Inside the garage.</figcaption>
            </figure>
            <p>
              Of course, as college became reality, I decided get creative with
              what I could in my own apartment by creating a special event,
              taking some of the same principles, but adding my own control
              using smart home Internet of Things devices. Some of the features
              implemented included syncing lights to sound effects and music,
              and projection mapping.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Keeping the tradition alive</h2>
            <p>
              In 2017, I played halloween movies in one room using a queued
              video system I created to play specific movies at certain
              showtimes, where the lights would turn on between films and off
              just before the next one.
            </p>
            <div id="vidGeneric">
              <figure>
                <video src="/assets/lwhs/generic.mp4" autoPlay loop controls />
                <figcaption>Custom event motion graphic.</figcaption>
              </figure>
            </div>
            <p>
              I also created a separate system in another room to play music and
              music videos. In the event of song without video, I created a
              custom-branded motion graphic to play. To make this work
              seamlessly, I interfaced with Apple Music and QuickTime Player.
              Since there aren’t public API’s provided for either app, I created
              custom Automator workflows that I could execute via command line,
              and built an API with PHP to call these actions to adjust volume,
              and playback, as well as control my Phillips Hue light bulbs.
            </p>
            <p>
              Overall the experience was very integrated allowing me to spend
              less time worrying about starting movies, or music, and instead
              spending more time with my guests.
            </p>
          </div>
        </section>
      </LWHS>
    </ProjectLayout>
  );
}
