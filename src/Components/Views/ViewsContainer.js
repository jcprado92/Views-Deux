import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewCard from './ViewCard';

import './ViewsContainer.scss'


const API = process.env.REACT_APP_API_URL;


function ViewsContainer() {
  const [views, setViews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/views`)
      .then((res) => {
      setViews(res.data.payload);
    });
  }, []);

  return (
    <div className="viewsContainer">
      {views.map(view => <ViewCard key={view.id} view={view} id={view.id}/>)}
    </div>
  );
}

export default ViewsContainer;
