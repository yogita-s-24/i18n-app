import React, { useState } from "react";
import "./Home.css";
import I18n from "./../../utils/i18n.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

function Home() {
  const [lang, setLang] = useState("mr");
  const userCount = 15;

  return (
    <>
    <Navbar/>
      <div className="card border w-50 rounded-2 mx-auto mt-5 p-3" style={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}}>
        <div className="text-center">
          <h2 className="mt-3 fw-bold">{I18n("welcomeMessage")}</h2>
          <p className="mt-3">{I18n("normalMessage")}</p>
          <h3 className="mt-3">{I18n("greetingMessage")}</h3>
          <h5 className="mt-3">{I18n("endMessage")}</h5>
        </div>

        <div>
          <select
            className="form-select w-25 d-block mx-auto mt-3 shadow bg-secondary text-light"
            defaultValue={localStorage.getItem("lang")}
            onChange={(e) => {
              localStorage.setItem("lang", e.target.value);
              window.location.reload();
            }}>
            <option value="mr">Marathi</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          <h4 className="text-center mt-3">
            {I18n("userStatusMessage", "<studentCount>", userCount)}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;
