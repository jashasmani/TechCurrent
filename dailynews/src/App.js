import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    // Fetch scraped data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT_HERE");
        setScrapedData(response.data); // Assuming API returns an array of scraped data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Data</h1>
      <ul>
        {scrapedData.map((data, index) => (
          <li key={index}>
            <strong>Title:</strong> {data.title} <br />
            <strong>Description:</strong> {data.description} <br />
            <strong>Link:</strong> <a href={data.link}>{data.link}</a> <br />
            <img
              src={data.image}
              alt="Scraped Data Image"
              style={{ maxWidth: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
