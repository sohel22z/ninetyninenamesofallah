import React from 'react'
import CardMain from '../components/main-cards/card';

const Home = () => {

  return (
    <>
      <div className="p-md-4">

        <section className="py-5 text-center container">
          <div className="row pt-lg-3">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-600">99 Names of Allah swt</h1>
              <div className="lead mt-2">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>Allah has ninety-nine names, i.e. one-hundred minus one, and whoever knows them will go to <b>Paradise</b>.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer mt-1">
                    Sahih al-Bukhari <cite title="Source Title">(6410)</cite>
                  </figcaption>
                </figure>
              </div>
              {/* <p className="lead text-muted">
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so
                folks don’t simply skip over it entirely.
              </p> */}
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <CardMain />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home;