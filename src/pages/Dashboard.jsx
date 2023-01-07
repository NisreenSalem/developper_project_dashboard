import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";
import ColorChangingAndCustomToolTip from "../charts/ColorChangingAndCustomToolTip";

const carObj = {
  title: "Energy",
  totalNumber: "45",
  ratio:45,
  icon: "ri-flashlight-line",
  bg:"#fff"
};

const tripObj = {
  title: "Range",
  totalNumber: "175K",
  ratio:50,
  icon: "ri-steering-2-line",
  bg:" #FF7E86"
};

const clientObj = {
  title: "Break fluid",
  totalNumber: "9",
  ratio:9,
  icon: "ri-drop-line",
  bg:"#A162F7"
};

const distanceObj = {
  title: "Tire Wear",
  totalNumber: "25",
  ratio:25,
  icon: "ri-share-circle-fill",
  bg:"#F6CC0D"
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj}  />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title"><span>Miles </span>Statistics</h3>
            <div className="stats__duration_wrapper">
            <div className="stats__duration">
                        <div>
                        <span>Day</span>
                          <span>Week</span>
                          <span>Month</span>
                        </div>
              <div>
              <span>256 Miles</span>
              </div>
              </div>
            </div>
       <ColorChangingAndCustomToolTip></ColorChangingAndCustomToolTip>
          </div>

          <div className="stats">
            <h3 className="stats__title"><span>Car</span> Statistics</h3>
            
            <div className="stats__duration_analysis">
            <div className="stats__duration_analysis">
            <div className="date">
              <span className="full__date">20 February 2022</span>
            </div>
                        <div>
                        <span>Day</span>
                          <span>Week</span>
                          <span>Month</span>
                        </div>
              
              </div>
            </div>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
