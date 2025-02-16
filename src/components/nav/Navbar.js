import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Navbar.css";
import ee from "../../assets/image/ee.jpeg"
import { Link } from "react-router-dom";
import { useState } from "react";
function MyNav() {

  return (
    <>
      <Nav>
        <Container>
          <Row>
            <Col className="d-flex galign-items-center pt-1">
              <Link to="https://github.com/Abolfazleyaghoobi" className="linknav mt-2">گیت هاب</Link>
              <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdZlszhihSfJBfoXkpJtOvDk9p_sskS4rSQ&s" alt="myImage" />
              </div>
            </Col>
            <Col className=" d-flex align-items-center  flex-row-reverse">
              <ul className="listNav d-flex flex-row-reverse">
                <li>
                  <Link>تماس با من</Link>
                </li>
                <li>
                  <Link>نمونه کار</Link>
                </li>
                <li>
                  <Link to="/">خانه</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  );
}

export default MyNav;
