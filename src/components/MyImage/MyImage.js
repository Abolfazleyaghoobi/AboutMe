import { Col, Container, Row } from "react-bootstrap";
import imageMe from "../../assets/image/pic.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./MyImage.css";
import Typewriter from "typewriter-effect";
gsap.registerPlugin(useGSAP);

function MyImage() {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col className=" ">
            <h2>
              سلام من{" "}
              <span style={{ color: "#ff014f", fontWeight: "bolder" }}>
                ابوالفضل هستم
              </span>
            </h2>
            <h5 className="d-flex">
             یک
              <div style={{ color: "#ff014f", fontWeight: "bolder" }}>
                <Typewriter
                  options={{
                    strings: [
                      "برنامه نویس حرفه ای"
                      
                     
                      , "UX,UI  دیزانر حرفه ای "

                      ,
                      "توسعه دهنده وب"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h5>
          </Col>
          <Col className="">
          <div className="boxshadow">

            <div className="conImage m-auto">
              <img className="img-fluid MyImage" src={imageMe} alt="" />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyImage;
