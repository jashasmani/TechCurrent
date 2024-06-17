import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import "./Main.css";

const Main = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://daily-news-1.onrender.com/data"
        );
        setScrapedData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <nav className="nav-style">
        <h1 className="title">TechCurrent</h1>
        <h5 className="date">{currentDate}</h5>
      </nav>
      <div className="main-content">
        {loading ? (
          <>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
            <div className="loader">Please wait...</div>
          </>
        ) : (
          <ul className="ul">
            {scrapedData.map((data, index) => (
              <li key={index} className="li">
                <div>
                  <strong className="st">{data.title}</strong> <br />
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  {data.description} <br />
                </div>
                <div className="right">
                  <a className="link" href={data.link}>
                    Show More
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="footer">
        <h6 className="bottomtitle">© JASH ASMANI. All rights reserved.</h6>
      </footer>
    </div>
  );
};

export default Main;