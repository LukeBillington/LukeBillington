import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const LukeiD = styled.div``;

export default function Page() {
  const project = projects[3];
  return (
    <ProjectLayout {...project}>
      <LukeiD>
        <section>
          <div>
            <p>
              With all the applications I have been creating recently, I wanted
              a way to provide my own OAuth2 single sign-on authentication
              platform similar to other services such as Facebook, Twitter and
              Google provide in addition the other stateful and stateless
              authentication systems my other applications provide.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>How it works</h2>
            <p>
              LukeiD works just like other common single sign-on services, just
              create an account and then login with one of my other apps (such
              as Lukeflix) that integrate LukeiD. Once logged in, the app will
              request permissions based off of different scopes the app requires
              such as your name, emails, or avatar photo. If a user approves the
              app’s request, they’ll immediately be authenticated into the app,
              requiring the user to only need to remember one password for
              everything.
            </p>
            <p>
              LukeiD was written in PHP and uses OpenSSL to provide AES-256
              encryption.
            </p>
          </div>
        </section>
      </LukeiD>
    </ProjectLayout>
  );
}
