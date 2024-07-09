import React from "react";

function Experience() {
  return (
    <div className="exp-cont">
      <div className="section-exp">
        <div className="title">
          <h2>EXPERIENCE</h2>
        </div>

        <h4 style={{ color: "blue", marginTop: "2rem" }}>
          Pinnacle Labs [Internship(06-2024 to 07-2024)]
        </h4>

        <div className="content">
          <p style={{ marginTop: "3rem" }}>
            <ul>
              <li>
              Developed a weather application that integrates with the OpenWeather API to fetch and
              display real-time weather data.
              </li>
              <li>
              Developed a News application that integrates with News Api for Real-time news updates from
              trusted sources with personalized content based on user interests.
              </li>
              
            </ul>
          </p>
        </div>


        <h4 style={{ color: "blue", marginTop: "2rem" }}>
          INFOSYS [Full-Time(10-2022 to 07-2023)]
        </h4>

        <div className="content">
          <p style={{ marginTop: "3rem" }}>
            <ul>
              <li>
                Worked in Infosys as a Digital Specialist Engineer from Oct-2022
                to July-2023.
              </li>
              <li>
                Focused extensively on frontend technologies, including HTML,
                CSS and React.
              </li>
              <li>
                Got a solid foundation in building responsive and interactive
                user interfaces, utilizing modern web development frameworks and
                best practices.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
