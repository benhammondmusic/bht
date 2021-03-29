import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ben Hammond - Uses</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content="/uses - tech, tools and toys used by Ben Hammond: Denver Dev && Song Builder"
        />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              Ben Hammond <span className="text-color-main">/uses</span>
              <br />
              (Denver Dev <span className="text-color-main">&&</span> Song Builder)
            </h1>
          </Fade>

          <Fade right duration={1000} delay={500} distance="30px">
            <div className="project-wrapper__text">
              <h3 className="project-wrapper__text-title">Tech</h3>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-color-main"
                  href="/"
                >
                  This cool thing
                </a>
                <p className="mb-4">Some text about this cool thing.</p>
              </div>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href="/"
              >
                Site
              </a>
            </div>
          </Fade>

          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Denver Developer
              </Link>
              <Link className="cta-btn text-color-main" to="http://www.benhammondmusic.com">
                Song Builder
              </Link>
              <Link className="cta-btn text-color-main" to="https://blog.benhammond.tech">
                Blog
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
