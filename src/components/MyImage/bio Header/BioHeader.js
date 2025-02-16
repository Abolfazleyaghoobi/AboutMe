import { TiSocialLinkedin } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import reactIcons from "../../../assets/image/logo/icons8_react_2.svg";
import htmlIcons from "../../../assets/image/logo/icons8_html_5_2.svg";
import JSIcons from "../../../assets/image/logo/icons8_javascript.svg";
import "./BioHeader.css";
function BioMe() {
  return (
    <>
      <p>
        به‌عنوان برنامه‌نویس وب فعالیت می‌کنم. من علاقه به زبان جاوااسگریپت دارم
        و علاقه زیادی به طراحی و توسعه وب‌سایت‌های کاربرپسند دارم. همیشه سعی
        می‌کنم در کارم بهترین باشم و چیزهای جدید یاد بگیرم.
        <br />
        اگر به دنبال همکاری یا صحبت در مورد پروژه‌های وب هستید، خوشحال می‌شوم با
        شما در ارتباط باشم.
      </p>
      <div className="row align-items-center">
        <div className="sial-media col">
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
        <div className="col">
          <b>بهترین مهارت های من:</b>
          <div className="skills d-flex mt-2">
            {/* React Skil */}
            <div className="react mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={reactIcons} alt="" />
              </a>
              <b>React</b>
            </div>
            {/* HTML Skil */}
            <div className="html mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={htmlIcons} alt="" />
              </a>
              <b>HTML5</b>
            </div>
            <div className="js mt-2 mx-2">
              <a className="text-dark">
                <img className="img-fluid" src={JSIcons} alt="" />
              </a>
              <b>JS</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioMe;
