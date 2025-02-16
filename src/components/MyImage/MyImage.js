import { Col, Container, Row } from "react-bootstrap";
import ffc from "../../assets/image/pic-min.png"
import gsap from "gsap";

import "./MyImage.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import BioMe from "./bio Header/BioHeader";
import { useGSAP } from "@gsap/react";

function MyImage() {
  useGSAP(() => {
  
    const timeline = gsap.timeline();
    timeline.to(".boxshadow", {
      x: 0,
      opacity: 1,
      duration: 1.9,
    });

  });


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
            <h5 className="d-flex ">
              <span style={{ color: "#ff014f" }} className="text-bold">
                یک
              </span>
              <div style={{ color: "#000", fontWeight: "bolder" }}>
                <Typewriter
                  options={{
                    strings: [
                      "توسعه دهنده فرانت اند"
                      ,
                      ""
                    ],
                    autoStart: true,
                 stringSplitter:Row,
                    delay: 20,
                    loop:true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h5>
            <BioMe />
          </Col>
          <Col className="">
            <div className="boxshadow">
              <div className="conImage m-auto">
                <img className="img-fluid MyImage" src={ffc} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyImage;
