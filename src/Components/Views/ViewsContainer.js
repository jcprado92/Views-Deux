import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewCard from '../Views/ViewCard'

// const API = process.env.REACT_APP_API_URL;

function ViewsContainer() {
  const [views, setViews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/views`)
      .then((res) => setViews(res.data.payload));
  }, []);

  return (
    <div>
      <h1>These are some views</h1>
      {views.map(view => <ViewCard view={view} />)}
    </div>
  );
}

export default ViewsContainer;
