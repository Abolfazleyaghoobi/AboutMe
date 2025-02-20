import { Container } from "react-bootstrap";
import "./Home.css";
import MyImage from "../../components/MyImage/MyImage";
import MyNav from "../../components/nav/Navbar";
import WhatIDo from "../../components/what-I-Do/WhatIDo";

function Home() {
  return (
    <>
      <header>
        <MyNav />
        <MyImage />
      </header>
      <br />

      <main>
        <Container>
          <b className="fs-2" style={{borderBottom:"1px solid black"}}>کاری هایی که من انجام میدم:</b>
          <WhatIDo />
        </Container>
      </main>
    </>
  );
}

export default Home;
