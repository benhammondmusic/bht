import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  // no longer need to destructure { paragraphOne, paragraphTwo, paragraphThree} in next line as the text is now hard coded in this file instead
  const { img, resume } = about;

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
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I&apos;m an enthusiastic software developer and self-starter with 15+ years
                  running a tech-forward music business. I am currently seeking seeking full-time
                  employment in the Denver area or remote as a developer and software engineer.
                </p>
                <p className="about-wrapper__info-text">
                  Driven to exceed expectations, I enjoy bringing an entertainer&apos;s eye to
                  engagement and an improviser&apos;s ear to the development of collective ideas.
                  I&apos;m committed to improving quality of life for myself and others through
                  lifelong learning, meaningful collaboration, and better code.
                </p>
                <p className="about-wrapper__info-text">
                  Most recently I&apos;ve been working in fullstack Javascript (React, Node), while
                  also excitedly learning new tools in order to create code which leverages my
                  musical expertise.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
