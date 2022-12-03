import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const Luketopia = styled.div`
  #imgIntro {
    width: 50%;
    float: right;
    position: relative;
    margin-left: 2rem;

    img {
      width: 30rem;
    }
  }

  #imgHome {
    transform: rotate(-10deg);
  }

  #imgAttraction {
    position: absolute;
    left: 40%;
    transform: rotate(15deg);
  }

  #imgSteps {
    width: 100%;
    padding-top: 35rem;
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 20rem;
    }
  }

  #imgGuests {
    position: absolute;
    top: 0;
    transform: translate(-10rem) rotate(-15deg);
  }

  #imgTimes {
    position: absolute;
    top: 0;
    z-index: 500;
  }

  #imgConfirm {
    position: absolute;
    top: 0;
    transform: translate(10rem) rotate(15deg);
  }
`;

export default function Page() {
  const project = projects[1];
  return (
    <ProjectLayout {...project}>
      <Luketopia>
        <section>
          <div>
            <p>
              After having many experiences of using a theme park companion app,
              I wanted to tackle making my own on a smaller scale, all while
              getting a better understanding of Flux architecture.
            </p>
          </div>
        </section>
        <section>
          <div>
            <figure id="imgIntro">
              <img
                id="imgHome"
                src="/assets/luketopia/home.png"
                alt="Home screen"
              />
              <img
                id="imgAttraction"
                src="/assets/luketopia/attraction.png"
                alt="Attracion screen"
              />
              <figcaption>Home screens.</figcaption>
            </figure>
            <h2>Guests first</h2>
            <p>
              One thing I’ve noted while using similar apps is it’s difficult to
              keep track of party members’ reservations as they’re often tucked
              away in a submenu. I wanted to bring guests to the forefront and
              design the overall experience around the guest, not the
              attractions, shops and dining.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>How it works</h2>
            <p>
              Since this app was more a prototype to work on implementing new
              technologies, many expected features have been omitted including
              park maps and user settings. When joining the app, users
              authenticate into an account, and add guests to their party.
              Reservations may then be set for an attraction at any available
              time slot. To set a reservation, the user will be prompted to
              select a time slot and which party members will be joining. The
              time slots do actually function and fill up as they would on a
              similar app. Tapping on a user’s badge will show their individual
              itinerary.
            </p>
          </div>
        </section>
        <section>
          <div>
            <figure id="imgSteps">
              <img
                id="imgGuests"
                src="/assets/luketopia/guests.png"
                alt="Guest picker"
              />
              <img
                id="imgTimes"
                src="/assets/luketopia/times.png"
                alt="Time selector"
              />
              <img
                id="imgConfirm"
                src="/assets/luketopia/confirm.png"
                alt="Confirm reservation"
              />
              <figcaption>Three-step reservation booking.</figcaption>
            </figure>
            <h2>Planning</h2>
            <p>
              Luketopia originally was branded as LukeVille and most of the
              sketching and mockups were created in an earlier course and
              shelved over a year before actually being built out in code. I
              originally started with some basic wireframes, then translated
              these to high-fidelity mockups using Adobe XD.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Technologies</h2>
            <p>
              When it came to actually constructing the app, I had one month to
              create a web version and a native version along with a backend
              server to manage it all, all while learning how to effectively
              implement a Flux architecture using Redux. I did have to escape
              using some pure functions, however, to implement calls to my own
              backend API and handle stateless authentication. For the frontend
              web and iOS/Android versions, I implemented React and React
              Native, while for the backend I opted for using the Laravel
              framework more for the sake of time to implement.
            </p>
          </div>
        </section>
      </Luketopia>
    </ProjectLayout>
  );
}
