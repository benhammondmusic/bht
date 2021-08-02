import React, { useState, useEffect } from 'react'; //  useContext,
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
// import PortfolioContext from '../../context/context';
import resumePDF from '../../images/BenHammondResume2021.pdf';

const About = () => {
  // const { about } = useContext(PortfolioContext);
  // no longer need to destructure { paragraphOne, paragraphTwo, paragraphThree} in next line as the text is now hard coded in this file instead
  // const { img, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="ben-headphones-square.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">JavaScript | React | Node | Python</p>
                <p className="about-wrapper__info-text">
                  I&apos;m an enthusiastic developer with 15+ years running a tech-forward music
                  business. I am a graduate of McGill University and General Assembly, living in
                  Denver, Colorado with my wife and two daughters.
                </p>
                <p className="about-wrapper__info-text">
                  I am currently employed by the Morehouse School of Medicine (Satcher Health
                  Leadership Institute) and a proud software engineer on their{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-white"
                    href="https://blog.benhammond.tech"
                  >
                    Health Equity Tracker
                  </a>
                  team.
                  {/* <blockquote>
                    The HET enables MSM to provide a detailed view of health outcomes by race,
                    ethnicity, sex, and other critical factors with a health equity–first approach.
                    The goal is that the tool will help policymakers understand what resources and
                    support communities need to be able to improve their outcomes on a range of
                    health issues.
                  </blockquote> */}
                </p>

                <p className="about-wrapper__info-text">
                  I believe deeply in the power of music and technology to uplift our communities,
                  so please reach out if I can help or answer any questions you may have.{' '}
                  <a href="#lets-build-something" className="cta-btn text-color-white">
                    Let&apos;s build something together!
                  </a>
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-white"
                    href="https://blog.benhammond.tech"
                  >
                    Blog
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-white"
                    href={resumePDF}
                  >
                    Resume (PDF)
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-white"
                    href="https://docs.google.com/document/d/1nYJf1ZjGetUo8lFbwoyf23prkTw-0H_HiqvMKlY5_nw/"
                  >
                    Resume (GDocs)
                  </a>
                </span>

                <span className="d-flex mt-3" />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
