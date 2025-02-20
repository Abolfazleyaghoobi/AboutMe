import logoResponsiven from "../../assets/image/logo/icons8_responsive_web.svg";
import logo3D from "../../assets/image/logo/icons8_3d_model_1.svg";
import logoUiUx from "../../assets/image/logo/icons8_web.svg";
import "./WhatIDo.css";
function WhatIDo() {
  return (
    <>
      <div className="boxContainer py-3">
        <div className="boxCard ">
          <div className="boxIcon ">
            <img className="logoSVG" src={logoResponsiven} alt="" />
          </div>
          <div className="boxContent">
            <b>
              <h2>ریسپانسیو سازی</h2>
            </b>
            <p>
              یکی از کار های که من میکنم اینکه سایت ها رو واکنشگرا درست میکنم یا
              به اصطلاح <b>Responsive</b> سازیش میکنم که سایت تو تمامیه دستگاها
              به صورت درست ِالِمان ها رو نمایش بده
            </p>
          </div>
        </div>
        <div className="boxCard ">
          <div className="boxIcon">
            <img className="logoSVG" src={logo3D} alt="" />
          </div>
          <div className="boxContent">
            <b>
              <h2>طراحی سایت های سه بعدی</h2>
            </b>
            <p>
              طراحی سایت‌های سه‌بعدی به کاربران تجربه‌ی بصری غنی و جذابی ارائه
              میده با استفاده از فناوری‌های مدرن، اطمینان حاصل می‌کنم که این
              سایت‌ها نه‌تنها زیبا و جذاب هستند، بلکه کاملاً کاربردی و کاربرپسند
              نیز باشند
            </p>
          </div>
        </div>
        <div className="boxCard ">
          <div className="boxIcon">
            <img className="logoSVG" src={logoUiUx} alt="" />
          </div>
          <div className="boxContent">
            <b>
              <h2> رابط کاربری روان </h2>
            </b>
            <p>
               طراحی رابط کاربری روان، تجربه‌ی کاربری لذت‌بخشی را برای
              کاربران فراهم می‌کنم که باعث تعامل بهتر و رضایت بیشتر آن‌ها می‌شود
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIDo;
