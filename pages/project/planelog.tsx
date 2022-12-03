import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const PlaneLog = styled.div``;

export default function Page() {
  const project = projects[4];
  return (
    <ProjectLayout {...project}>
      <PlaneLog>
        <section>
          <div>
            <p>
              Over New Year’s 2018, I had visited several aviation-related
              museums and attractions in Seattle, as I have a hobbyist interest
              in commercial flight. I also did a little digging and found all my
              plane registrations on flights dating back to 2013. It was
              fascinating seeing where those planes were now, and I wanted a
              cool way to visualize it, so I made a little tool overnight. It’s
              nowhere near complete, but it’s working. Basically, it finds any
              of the planes I’ve been on, currently flying, and shows their
              location on a live map, along with other details using the Google
              Maps API.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Gathering data</h2>
            <p>
              I ran into a few obstacles, as no single data source had
              everything I needed. I ended up writing a background Redis server
              that would periodically fetch information (some things every
              minute, others daily) from FAA’s aircraft registrations,
              FlightRadar24’s live data, OpenFlights’ airport data, and
              Airfleet’s airline information. I made a mini JSON API endpoint to
              render out this map, however I’m looking to move things to sockets
              later this afternoon. Of course, there was a lot of sanitizing and
              normalizing involved, but the data is working well together to
              tell a story, something I haven’t found much of, considering the
              many plane spotters out there.
            </p>
            <p>
              I’m pretty satisfied with the progress I’ve made, but I’m looking
              to eventually tie in some photos, Service Difficulty Reports
              (SDR’s) and NTSB accident data. Currently this only supports
              planes registered in the US with an N-prefixed tail number, maybe
              I’ll soon expand that as well, after I create an interface of
              course. As for now I don’t plan on scaling this beyond myself, as
              I don’t have the resources to do so, but in the future this could
              make for a cool network for plane spotters and enthusiasts.
            </p>
          </div>
        </section>
      </PlaneLog>
    </ProjectLayout>
  );
}
