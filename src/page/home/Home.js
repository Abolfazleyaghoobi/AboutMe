import { Container } from "react-bootstrap";
import "./Home.css";
import MyImage from "../../components/MyImage/MyImage";
import MyNav from "../../components/nav/Navbar";

function Home() {
    return ( 
       <>
      <header>
        <MyNav/>
        <MyImage/>
      </header>
       </>
     );
}

export default Home;