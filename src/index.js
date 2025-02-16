import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => setLoading(false);

    // اگر DOM قبلاً آماده باشد
    if (document.readyState === "interactive" || document.readyState === "complete") {
      setLoading(false);
    } else {
      // گوش دادن به رویداد DOMContentLoaded
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    }

    // پاکسازی event listener
    return () => document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
  }, []);

  return (
    <>
      {loading ? (
      <Loader/>// نمایش صفحه لودینگ
      
      ) : (
        // نمایش اپلیکیشن اصلی
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<Root />);
