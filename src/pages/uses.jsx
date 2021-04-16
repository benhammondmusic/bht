import React from 'react';
// import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-tilt';

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
        <meta name="description" content="benhammond.tech/uses" />
      </Helmet>
      <section id="uses" className="jumbotron">
        <Container>
          {/* TITLE   */}
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="uses-title">
              benhammond.tech<span className="text-color-main">/uses</span>
              <br />
            </h1>
          </Fade>

          <Row>
            <Col lg={4} sm={12}>
              <Fade right duration={1000} delay={500} distance="30px">
                <article className="uses-wrapper__text">
                  <h3 className="uses-wrapper__text-title">Tech:</h3>
                  <div>
                    <p className="mb-4">Hardware</p>
                    <ul className="mb-4">
                      <li>2015 15&quot; Macbook Pro (all the ports, none of the touchbar) </li>
                      <li>Bose Sound Cancelling Headphones</li>
                      <li>HP 24 mh (External Monitor)</li>
                      <li>Flip Down Desk</li>
                    </ul>
                    <p className="mb-4">Software</p>
                    <ul className="mb-4">
                      <li>VSCode</li>
                      <li>Simplenote</li>
                      <li>Todoist</li>
                      <li>OneNote</li>
                      <li>Mr Black Mini-Tremolo</li>
                      <li>Strymon El Capistan - Tape Echo</li>
                      <li>Boss OC-3 - Octave</li>
                      <li>Bose T4s - Compact Mixer</li>
                      <li>Voodoo Lab Pedal Power 2 Plus Power Supply</li>
                      <li>Boss AW-3</li>
                    </ul>
                    <p className="mb-4">Services</p>
                    <ul className="mb-4">
                      <li>Hashnode</li>
                      <li>Netlify</li>
                      <li>Heroku</li>
                      <li>GitHub</li>
                    </ul>
                  </div>
                </article>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade right duration={1000} delay={1000} distance="30px">
                <div className="uses-wrapper__image">
                  <a
                    href="https://benhammond.tech"
                    target="_blank"
                    aria-label="uses Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        {/* <usesImg alt={title} filename={img} /> */}
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>

          <Row>
            <Col lg={4} sm={12}>
              <Fade right duration={1000} delay={500} distance="30px">
                <article className="uses-wrapper__text">
                  <h3 className="uses-wrapper__text-title">Music</h3>

                  <div>
                    <p className="mb-4">Instruments</p>
                    <ul className="mb-4">
                      <li>Godin Multiac Electric Nylon String Guitar</li>
                      <li>Taylor T5x Hybrid Electric-Acoustic Guitar</li>
                      <li>Meisel 3600 5/8 Upright Bass</li>
                      <li>Taylor GS-Mini Koa Steel String Acoustic Guitar</li>
                    </ul>
                    <p className="mb-4">Pedalboard</p>
                    <ul className="mb-4">
                      <li>Boomerang III Phrase Sampler - Loop Pedal</li>
                      <li>Boomerang Sidecar - Loop Pedal Controller</li>
                      <li>Sparkle Drive - Overdrive and Boost</li>
                      <li>Boss AW-3 - Envelope Filter</li>
                      <li>Mr Black Mini-Tremolo</li>
                      <li>Strymon El Capistan - Tape Echo</li>
                      <li>Boss OC-3 - Octave</li>
                      <li>Bose T4s - Compact Mixer</li>
                      <li>Voodoo Lab Pedal Power 2 Plus Power Supply</li>
                      <li>Boss AW-3</li>
                    </ul>
                    <p className="mb-4">Gear</p>
                    <ul className="mb-4">
                      <li>Bose L1 Model 2 with B2 Bass Module (Larger PA)</li>
                      <li>Bose S1 (Battery Powered PA for mountaintop weddings)</li>
                      <li>Westone AC-30 </li>
                      <li>Rock N Roller Multicart Model R2 Micro</li>
                    </ul>
                    <p className="mb-4">Toys</p>
                    <ul className="mb-4">
                      <li>Moog Etherwave Theremin</li>
                    </ul>
                  </div>
                </article>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade right duration={1000} delay={1000} distance="30px">
                <div className="uses-wrapper__image">
                  <a
                    href="https://benhammond.tech"
                    target="_blank"
                    aria-label="uses Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        {/* <usesImg alt={title} filename={img} /> */}
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>

          {/* <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="uses-cta justify-content-center">
              <Link className="cta-btn cta-btn--uses" to="/">
                Denver Developer
              </Link>
              <Link className="cta-btn text-color-main" to="http://www.benhammondmusic.com">
                Song Builder
              </Link>
              <Link className="cta-btn text-color-main" to="https://blog.benhammond.tech">
                Blog
              </Link>
            </p>
          </Fade> */}
        </Container>
      </section>
    </>
  );
};
