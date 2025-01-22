import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Navbar.css";
import myImage from "../../assets/image/Myimage.png";
import { Link } from "react-router-dom";
function MyNav() {
  return (
    <>
      <Nav>
        <Container>
          <Row>
            <Col className="d-flex galign-items-center pt-1">
              <Link className="linknav mt-2">من</Link>
              <div className="image">
                <img src={myImage} alt="myImage" />
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
