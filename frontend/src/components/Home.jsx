import React from "react";

function Home() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1_Ueq5F4sBUDJd3dKy2Ux8cpbh_D6LewK/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="section">
      <div className="left">
        <p>Hii, my name is</p>
        <span className="name">Yashraj Singh</span>
        <p>Frontend Web Developer</p>

        <button className="home-btn" onClick={openResume}>
          <span style={{ fontSize: "1rem" }}>VIEW RESUME📄</span>
        </button>
      </div>
      <div className="right" style={{ float: "right" }}>
        <img src={require("./pic.png")} alt="" />
      </div>
    </div>
  );
}

export default Home;
