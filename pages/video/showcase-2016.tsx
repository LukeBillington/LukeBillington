import styled from "styled-components";
import videos from "../../data/videos";
import VideoLayout from "../../components/VideoLayout";

const Showcase2016 = styled.div``;

export default function Page() {
  const video = videos[0];
  return (
    <VideoLayout {...video}>
      <Showcase2016>
        <>
          <p>
            Join me after just finishing up my 6th month at Full Sail University
            as I showcase my Battlegrounds console game I created in C#.
          </p>
          <p>
            This was one of my first major C# projects. It's a terminal console
            turn-based RPG game using randomness to generate attacks. I first
            started on this project in my Scaleable Data Infrastructures course,
            and later expanded on it in my Project and Portfolio I course.
            Gameplay involves choosing a character, then being paired with a
            random opponent. Then each turn each player rolls a dice and moves
            their player the rolled amount of spaces on the game board. Using
            the distance and other factors such as health and attack strength,
            players play until defeat.
          </p>
        </>
      </Showcase2016>
    </VideoLayout>
  );
}
