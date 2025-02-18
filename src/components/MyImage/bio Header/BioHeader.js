import { TiSocialLinkedin } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import reactIcons from "../../../assets/image/logo/icons8_react_2.svg";
import htmlIcons from "../../../assets/image/logo/icons8_html_5_2.svg";
import JSIcons from "../../../assets/image/logo/icons8_javascript_1.svg";
import "./BioHeader.css";
import Typewriter from "typewriter-effect";

import { Link } from "react-router-dom";
function BioMe() {
  return (
    <>
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
                 
                    delay: 20,
                    loop:true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h5>
      <p>
        به‌عنوان برنامه‌نویس وب فعالیت می‌کنم. من علاقه به زبان جاوااسگریپت دارم
        و علاقه زیادی به طراحی و توسعه وب‌سایت‌های کاربرپسند دارم. همیشه سعی
        می‌کنم در کارم بهترین باشم و چیزهای جدید یاد بگیرم.
        <br />
        اگر به دنبال همکاری یا صحبت در مورد پروژه‌های وب هستید، خوشحال می‌شوم با
        شما در ارتباط باشم.
      </p>
      <div className="row row-cols-1 row-cols-xl-2 align-items-center">
        <div className="sial-media col ">
          <b>پیدا کردن من:</b>
          <div className="linkedin mt-2">
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/abolfazle-yaghoobi-a99638348/"
            >
              <TiSocialLinkedin size={25} />
            </a>
          </div>
        </div>
        <div className="col skill">
          <b>بهترین مهارت های من:</b>
          <div className="skills d-flex mt-2">
            {/* React Skil */}
            <div className="react mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={reactIcons} alt="" />
              </a>
             <p> <b>React</b></p>
            </div>
            {/* HTML Skil */}
            <div className="html mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={htmlIcons} alt="" />
              </a>
             <p> <b>HTML5</b></p>
            </div>
            {/* js */}
            <div className="js mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={JSIcons} alt="" />
              </a>
          <p><b>JS</b></p>
            </div>
            {/* more */}
           
          </div>
        </div>
      </div>
    </>
  );
}

export default BioMe;
