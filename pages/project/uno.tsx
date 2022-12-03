import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled, { keyframes } from "styled-components";

const cardColors = keyframes`
  0% { fill: #d50000; }
  25% { fill: #FFD600; }
  50% { fill: #00C853; }
  75% { fill: #2962FF; }
  100% { fill: #d50000; }
`;

const Uno = styled.div`
  #card {
    float: right;
    margin-left: 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 25rem;
    background-color: #ffffff;
    padding: 0.75rem;
    border-radius: 1rem;
    margin-right: 3rem;
    transform: rotate(10deg);

    .cls-1 {
      fill: #1a1a1a;
      animation-name: ${cardColors};
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
    .cls-2 {
      fill: #fff;
    }
  }

  #vidGameplay {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 599px) {
    #card {
      float: none;
      margin-top: 2rem;
      margin-bottom: 2rem;
      margin-left: auto;
      margin-right: auto;
      width: 25rem;
      background-color: #ffffff;
      padding: 0.75rem;
      border-radius: 1rem;
      transform: rotate(0);
    }

    #vidGameplay {
      width: 100%;
    }
  }
`;

export default function Page() {
  const project = projects[2];
  return (
    <ProjectLayout {...project}>
      <Uno>
        <section>
          <div>
            <p>
              UNO is one of my favorite card games. Unfortunately over time I
              kept losing some of the cards, so I thought I could give it a go
              to recreate it as a multiplayer LAN game to play with friends and
              eliminate the fear of losing or bending cards altogether. Little
              did I expect that this app would become a great lesson to creating
              a real-time application with multiple users interacting with each
              other as well as demonstrate the importance of user testing.
            </p>
            <div id="card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 330">
                <title>reverse</title>
                <g id="Color">
                  <path
                    className="cls-1"
                    d="M41.67,319.34C26.33,310.48,15.76,295.51,10,276.63V336a4,4,0,0,0,4,4H236a4,4,0,0,0,4-4V154.1A259.77,259.77,0,0,1,211.6,225C165.58,304.72,89.5,347,41.67,319.34Z"
                    transform="translate(-10 -10)"
                  />
                  <path
                    className="cls-1"
                    d="M45.83,312.12c45.44,26.23,117.72-13.89,161.44-89.62s42.34-158.39-3.1-184.62S86.46,51.77,42.73,127.5.39,285.89,45.83,312.12Z"
                    transform="translate(-10 -10)"
                  />
                  <path
                    className="cls-1"
                    d="M236,10H14a4,4,0,0,0-4,4V195.9A259.77,259.77,0,0,1,38.4,125c46-79.72,122.1-122,169.93-94.34,15.34,8.86,25.91,23.83,31.67,42.71V14A4,4,0,0,0,236,10Z"
                    transform="translate(-10 -10)"
                  />
                </g>
                <g id="White">
                  <path
                    className="cls-2"
                    d="M197.44,222.5a3.75,3.75,0,0,0-2.77-1.17H178.89v-13.8q0-43.93-24.84-53.93-8.27-3.27-20.52-3.27-10.23,0-27.79,7.83l-1.48.65-.56.25c-.29-1.91-.52-3.83-.67-5.75-.25-3.19-.37-6.79-.37-10.82v-13.8h15.78a3.92,3.92,0,0,0,2.77-6.72L89.66,90.4a3.87,3.87,0,0,0-5.47-.08l-.08.08L52.56,122a3.94,3.94,0,0,0,2.77,6.72H71.11v13.8q0,43.93,24.84,53.93,8.26,3.27,20.52,3.27,10.23,0,27.79-7.83l1.48-.65.56-.25c.29,1.91.52,3.83.67,5.75.25,3.19.37,6.79.37,10.82v13.8H131.56a3.92,3.92,0,0,0-2.77,6.72l31.55,31.55a3.87,3.87,0,0,0,5.47.08l.08-.08L197.44,228a3.87,3.87,0,0,0,.08-5.47l-.08-.08Zm-52.69-36.32q-4.19.31-7.58.31A52.37,52.37,0,0,1,126,185.4a33.42,33.42,0,0,1-8.53-3,21.39,21.39,0,0,1-6.22-4.93A28.94,28.94,0,0,1,107,171a34.33,34.33,0,0,1-2.37-7.11h.64q4.19-.31,7.58-.31a52.19,52.19,0,0,1,11.15,1,33.42,33.42,0,0,1,8.53,3,21.39,21.39,0,0,1,6.22,4.93A28.94,28.94,0,0,1,143,179a34.33,34.33,0,0,1,2.37,7.11,3.32,3.32,0,0,1-.62.06Z"
                    transform="translate(-10 -10)"
                  />
                  <path
                    className="cls-2"
                    d="M66.3,62.42a1.16,1.16,0,0,0-.84-.36H60.67V57.87q0-13.33-7.53-16.36a16.88,16.88,0,0,0-6.22-1q-3.11,0-8.43,2.37l-.45.2-.17.08c-.09-.58-.16-1.16-.2-1.74-.07-1-.11-2.06-.11-3.28V34h4.78a1.19,1.19,0,0,0,.84-2l-9.57-9.57a1.17,1.17,0,0,0-1.65,0l0,0L22.36,32a1.2,1.2,0,0,0,.09,1.69,1.17,1.17,0,0,0,.75.31H28v4.19q0,13.34,7.53,16.36a16.88,16.88,0,0,0,6.22,1q3.11,0,8.43-2.37l.45-.2.17-.08c.09.58.16,1.16.2,1.74.07,1,.11,2.06.11,3.28v4.19H46.32a1.19,1.19,0,0,0-.84,2L55,73.67a1.17,1.17,0,0,0,1.65,0l0,0L66.3,64.1a1.17,1.17,0,0,0,0-1.65Zm-16-11c-.85.06-1.61.09-2.3.09a16,16,0,0,1-3.38-.33A10.21,10.21,0,0,1,42,50.26a6.56,6.56,0,0,1-1.89-1.5,8.81,8.81,0,0,1-1.3-2,10.34,10.34,0,0,1-.72-2.16h.19c.85-.06,1.61-.09,2.3-.09a16,16,0,0,1,3.38.33,10,10,0,0,1,2.59.91,6.56,6.56,0,0,1,1.89,1.5,8.81,8.81,0,0,1,1.3,2,10.34,10.34,0,0,1,.72,2.16Z"
                    transform="translate(-10 -10)"
                  />
                  <path
                    className="cls-2"
                    d="M227.64,316.39a1.16,1.16,0,0,0-.84-.36H222v-4.19q0-13.33-7.53-16.36a16.88,16.88,0,0,0-6.22-1q-3.1,0-8.43,2.37l-.45.2-.17.08c-.09-.58-.16-1.16-.2-1.74-.07-1-.11-2.06-.11-3.28v-4.19h4.78a1.19,1.19,0,0,0,.84-2L195,276.33a1.17,1.17,0,0,0-1.65,0l0,0-9.57,9.57a1.2,1.2,0,0,0,.09,1.69,1.17,1.17,0,0,0,.75.31h4.78v4.19q0,13.34,7.53,16.36a16.88,16.88,0,0,0,6.22,1q3.1,0,8.43-2.37l.45-.2.17-.08c.09.58.16,1.16.2,1.74.07,1,.11,2.06.11,3.28V316H207.7a1.19,1.19,0,0,0-.84,2l9.57,9.57a1.17,1.17,0,0,0,1.65,0l0,0,9.57-9.57a1.17,1.17,0,0,0,0-1.65l0,0Zm-16-11c-.85.06-1.61.09-2.3.09a16,16,0,0,1-3.38-.33,10,10,0,0,1-2.59-.91,6.56,6.56,0,0,1-1.89-1.5,8.81,8.81,0,0,1-1.3-2,10.34,10.34,0,0,1-.72-2.16h.19c.85-.06,1.61-.09,2.3-.09a16,16,0,0,1,3.38.33,10,10,0,0,1,2.59.91,6.56,6.56,0,0,1,1.89,1.5,8.81,8.81,0,0,1,1.3,2,10.34,10.34,0,0,1,.72,2.16Z"
                    transform="translate(-10 -10)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Card art</h2>
            <p>
              Each of the cards were created as SVG graphics. This has many
              benefits for this application, especially for reducing the
              dependent files. Instead of creating a card for each color, and
              each number, I could create one file for all the numbered cards,
              and one for each of the special cards and just programatically
              adjust the colors and numbers. This also allows for dynamic
              resizing with no pixelation.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Real-time obstacles</h2>
            <p>
              I rapidly created a Laravel project to run the game within a few
              hours. Although I foresaw this, I quickly reefirmed that serving
              static pages via PHP certainly wasn’t the way to play a game.
              Asking a user to refresh their page every few seconds was
              ridiculous. After a few minutes I had built a clunky
              auto-refresher, that would re-render the whole page every couple
              seconds. It was at least playable, however it required extensive
              server power to handle all the page requests.
            </p>
            <p>
              Eventually I got clever and started serving a mini API that served
              a key code. Using a little JavaScript in the client, I wrote an
              AJAX call using jQuery over an interval that would continually
              ping the API for a key-code, and whenever the key change, the page
              re-rendered. This was better but still wasn’t the most pretty
              interface.
            </p>
            <p>
              After doing some research I discovered Laravel’s recent
              integration with Vue.js and re-wrote all the static pages in
              JavaScript to take advantage of the framework. The result was much
              more dynamic and even included card animations. Also discovering
              Socket.IO and Redis, I was able to make the game much more
              efficient and run incredibly smoothly. In fact, too smooth.
            </p>
            <p>
              As players were clicking cards faster and faster, I never disabled
              clicks immediately to process, therefore when players emitted
              events such as playing a card on their turn, they often would
              accidentally click so fast that two cards would be played at once
              instead of one, throwing off the game mechanics. This was a quick
              fix, however as I would disable clicks immediately on the client
              end until the server returns back with updated information.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Interfaces & user testing</h2>
            <p>
              Trying to create an interface for a game you normally play
              visually with cards was interesting. Showing how many cards a user
              had, and their score was a bit tricky, but the most confusing part
              was that UNO has a player order that would constantly reverse
              itself.
            </p>
            <div id="vidGameplay">
              <figure>
                <video src="/assets/uno/gameplay.mp4" autoPlay loop controls />
                <figcaption>Sample gameplay.</figcaption>
              </figure>
            </div>
            <p>
              Originally, I had the players displayed horizontally across the
              top of the screen, which ended up lowering the main card below the
              fold, so a user would constantly have to scroll up and down to see
              who’s turn it was and what card was played. In addition, showing
              the current direction of play was done by having a rotating arrow.
              This just simply caused too much confusion. I researched a bit how
              to present this and came across baseball lineup screens. Like
              these screens, I split the players to the left vertically, and the
              game action to the right. Then when the player order changed, the
              names and stats animated to their new position. This change made a
              huge improvement in the overall game playability.
            </p>
          </div>
        </section>
      </Uno>
    </ProjectLayout>
  );
}
