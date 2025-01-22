import { Col, Container, Row } from "react-bootstrap";
import imageMe from "../../assets/image/Myimage.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./MyImage.css";
gsap.registerPlugin(useGSAP);

function MyImage() {
  


 
  return (
    <div>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
    </div>
  )
}

export default MyImage;
