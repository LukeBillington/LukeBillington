import ProjectLayout from "../../components/ProjectLayout";
import projects from "../../data/projects";
import styled from "styled-components";

const WD6International = styled.div`
  #imgHome,
  #imgItem {
    width: 45%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  #imgParkPack,
  #imgCart {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 599px) {
    #imgHome,
    #imgItem {
      width: 100%;
    }
  }
`;

export default function Page() {
  const project = projects[5];
  return (
    <ProjectLayout {...project}>
      <WD6International>
        <section>
          <div>
            <p>
              For my Web Design Portfolio 6 course (WD6), I had to create a
              project proposal and build out a functioning shopping cart
              application for a fictitious WD6 International company. After much
              research and competitive analysis, I wanted to tailor it towards
              Disney Parks for my own concept of ParkPacks that I think Disney
              could implement into their own My Disney Experience app.
            </p>
          </div>
          <div className="media">
            <figure id="imgHome">
              <img src="/assets/wd6/home.png" alt="Home screen" />
              <figcaption>Landing page.</figcaption>
            </figure>
            <figure id="imgItem">
              <img src="/assets/wd6/item.png" alt="Item description screen" />
              <figcaption>ParkPack for sale.</figcaption>
            </figure>
          </div>
        </section>
        <section>
          <div>
            <h2>What’s a ParkPack?</h2>
            <p>
              The concept for ParkPacks is to create a pre-planned vacation,
              where guests choose from an assortment of pre-planned packages
              over a variety of durations and themes. A package would be shipped
              home to each guest in a party containing their customized
              MagicBand, some trading pins and other small exclusive merchandise
              to excite them for their upcoming trip. When the guest arrives
              everything, including their resort stay, meal reservations,
              Fastpass+ selections and other events such as special tours, and
              character meet-and-greets would all be set up, so the guests don’t
              have to stress about planning and can just enjoy a special
              seamless vacation experience.
            </p>
          </div>
        </section>
        <section>
          <div>
            <figure id="imgParkPack">
              <img src="/assets/wd6/parkpack.png" alt="ParkPack artwork" />
              <figcaption>Imagineering ParkPack mailer box.</figcaption>
            </figure>
            <h2>The artwork</h2>
            <p>
              I created custom product artwork by playing around with Adobe
              Creative Cloud’s new Dimension app to create a three-dimensional
              box. The rendered results seemed quite professional grade. Other
              artwork was provided from Unsplash.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Behind the curtain</h2>
            <p>
              The shopping cart itself was created in PHP using the Laravel
              framework with responsive design in mind. It includes social
              sign-in with Twitter integration, reviews, checkout with Stripe.
              Cart items are stored in a session when logged out, but transfers
              items to the and merges with the user’s cart in the database upon
              login. Checkout can be completed as a guest or a registered user.
            </p>
            <figure>
              <img src="/assets/wd6/cart.png" alt="Cart checkout screen" />
              <figcaption className="interactive">
                Hybrid checkout that saves to session and account.
              </figcaption>
            </figure>
          </div>
        </section>
      </WD6International>
    </ProjectLayout>
  );
}
