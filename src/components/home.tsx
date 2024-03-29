import { Link } from "react-router-dom";

interface iImage{
  image: string
}

function Home({image}: iImage) {
  return (
    <>
      <section className="hero is-fullheight-with-navbar ">
        <div className="hero-body has-text-centered">
          <div className="container">
            <div className="card">
              <Link to="/characters">
                <div className="card-image">
                  <figure className="image">
                    <img src={image} alt="Placeholder image" />
                  </figure>
                </div>
              </Link>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Game of Thrones</p>
                    <p className="subtitle is-6">7 Seasons</p>
                  </div>
                </div>

                <div className="content">
                  <p>
                    The series focuses on several noble houses of Westeros and a
                    complicated, multiparty war for the Iron Throne that
                    features shifting conflicts, alliances, and betrayals. Key
                    houses include the Starks, who rule in the North; the
                    Lannisters, a wealthy family from the West who have married
                    into the royal line; the Baratheons, who at the outset hold
                    the Iron Throne; and the Targaryens, who once controlled the
                    Iron Throne using dragons but who have been nearly wiped out
                    by the time the story begins.
                  </p>
                  <a
                    href="https://www.imdb.com/title/tt0944947/"
                    target="_blank"
                  >
                    <p className="title is-4">To IMDb</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
