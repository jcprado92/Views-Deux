import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ViewsContainer() {
  const [views, setViews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/views`)
      .then((res) => {
      console.log(res);
      setViews(res.data.payload);
    });
  }, []);

  return (
    <div>
      <h1>These are some views</h1>
    </div>
  );
}

export default ViewsContainer;
