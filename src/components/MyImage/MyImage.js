import { Col, Container, Row } from "react-bootstrap";
import ffc from "../../assets/image/pic-min.png";
import gsap from "gsap";

import "./MyImage.css";
import { useEffect, useState } from "react";
import BioMe from "./bio Header/BioHeader";
import { useGSAP } from "@gsap/react";

function MyImage() {
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.to(".boxshadow", {
      left:0,
      opacity: 1,
      duration: 1.9,
      visibility: "visible",
    });
  });

  return (
    <div>
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2 gridee">
          <Col className="position-relative">
            <div className="contai">
              <div className="boxshadow">
                <div className="conImage m-auto">
                  <img className="img-fluid MyImage" src={ffc} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col className=" ">
            <BioMe />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyImage;
