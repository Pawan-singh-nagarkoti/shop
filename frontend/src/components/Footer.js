import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="footer_wraper">
          {/* first container */}
          <div>
            <h4 className="about">About</h4>
            <div>
              <p className="detail_user">
                <i className="fas fa-map-marker-alt"></i>203 Fake St. Mountain
                View, San Francisco, California, USA
              </p>
              <p className="detail_user">
                <i className="fas fa-phone-square-alt"></i>+91 9865454000
              </p>
              <p className="detail_user">
                <i className="fas fa-at"></i>nagarkoti@gmail.com
              </p>
            </div>
          </div>

          {/* second container */}
          <div>
            <h4 className="information">Information</h4>
            <div>
              <p className="info_data">
                <i className="fas fa-arrow-right"></i>About
              </p>
              <p className="info_data">
                <i className="fas fa-arrow-right"></i>Product
              </p>
              <p className="info_data">
                <i className="fas fa-arrow-right"></i>Blog
              </p>
              <p className="info_data">
                <i className="fas fa-arrow-right"></i>Contact
              </p>
              <p className="info_data">
                <i className="fas fa-arrow-right"></i>Help & support
              </p>
            </div>
          </div>

          {/* third container */}
          <div>
            <h4 className="instagram">Instagram</h4>
            <div className="instagram_image">
              <img src="./images/one.jpg" alt="" />
              <img src="./images/two.jpg" alt="" />
              <img src="./images/three.jpg" alt="" />
              <img src="./images/four.jpg" alt="" />
              <img src="./images/five.jpg" alt="" />
              <img src="./images/six.jpg" alt="" />
            </div>
          </div>
        </footer>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; nagarkoti shop
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
