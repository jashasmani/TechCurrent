import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file

const App = () => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");
        setScrapedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {" "}
     
      <h1 className="title">Technology Updates</h1>
      <ul className="ul">
        {scrapedData.map((data, index) => (
          <li key={index} className="li">
            <div>
              <strong className="st">{data.title}</strong> <br />
            </div>
            <div style={{marginTop:'1.5rem'}}>
              {data.description} <br />
            </div>
            <div className="right">
              <a className="link" href={data.link}>Show More</a> <br />
            </div>
          </li>
        ))}
      </ul>
      <h6 className="bottomtitle">© all rights reserved by JASH ASMANI</h6>
    </div>
  );
};

export default App;
