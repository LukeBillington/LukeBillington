import styled from "styled-components";
import videos from "../../data/videos";
import VideoLayout from "../../components/VideoLayout";

const Showcase2017 = styled.div``;

export default function Page() {
  const video = videos[1];
  return (
    <VideoLayout {...video}>
      <Showcase2017>
        <>
          <p>
            Join me after just finishing my 18th month at Full Sail University
            as I recap where I've been and showcase where I'm going.
          </p>
          <p>Mentioned projects include:</p>
          <dl>
            <dt>Battlegrounds</dt>
            <dd>
              This was one of my first major C# projects. It's a terminal
              console turn-based RPG game using randomness to generate attacks.
              I first started on this project in my Scaleable Data
              Infrastructures course, and later expanded on it in my Project and
              Portfolio I course. Gameplay involves choosing a character, then
              being paired with a random opponent. Then each turn each player
              rolls a dice and moves their player the rolled amount of spaces on
              the game board. Using the distance and other factors such as
              health and attack strength, players play until defeat.
            </dd>
            <dt>Luke's Wicked Halloween Spooktacular</dt>
            <dd>
              I wanted to create an immersive get together with a few friends
              for Halloween. The best way to do this was to program everything,
              then I could spend less time on maintaining the event, and more
              time with my friends. Some special highlights include timing sound
              effects with light effects using Phillips Hue light bulbs, some
              custom animation work, and running movies in a separate room that
              started on a timer, and turned the lights off at start and on at
              credits.
            </dd>
            <dt>Movie Nights</dt>
            <dd>
              I created many various movie night events with custom remote web
              apps for each night that could greet friends by name, play/pause
              the movie and change lights to custom configurations. The app's
              remote and movie viewer client applications were created using
              jQuery and the server was ran using PHP, and integrating my own
              custom lights, time, and events API's to make it all stay in sync.
            </dd>
            <dt>LukeiD</dt>
            <dd>
              LukeiD is a single-sign-on OAuth2 platform that provides
              authentication for my other applications.
            </dd>
            <dt>Lukeflix</dt>
            <dd>
              I wanted to take my movie experience even further by creating an
              app that let me find a movie, press play, and handle everything by
              serving an events-driven API and socket server. This allows
              possibilities like lights and thermostats syncing with scenes or
              movie start/credit times to actually happen. I used a combination
              of Laravel, React, Electron, Socket.IO, and Redis to make it
              happen and utilized The Movie Database for performing movie
              matching, and to provide the data. I also created a custom image
              resizing micro-service to ensure consistent cover and backdrop
              art.
            </dd>
            <dt>UNO</dt>
            <dd>
              I wanted to create a realtime multiplayer gaming experience, so I
              took on recreating the classic game UNO. I made this app possible
              by using the Laravel PHP framwork, Redis, Socket.IO and Vue.js.
            </dd>
            <dt>Projection game</dt>
            <dd>
              This is a really new prototype creation and concept of mixing
              projection mapping and games together.
            </dd>
          </dl>
        </>
      </Showcase2017>
    </VideoLayout>
  );
}
