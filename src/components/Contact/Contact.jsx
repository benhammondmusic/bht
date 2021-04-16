import React from 'react'; // { useContext }
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Let&apos;s Build Something Together!</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="mailto:hello@benhammond.tech"
            >
              hello@benhammond.tech
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
