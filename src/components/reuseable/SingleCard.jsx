import React from "react";
import {
  CircularProgressbar,
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const SingleCard = (props) => {
 
  return (
    <div className="single__card" >
         <div className="single__card--icon" >
             <span>
             <i className={props.item.icon}></i> 
             </span>
         </div>
         <div className="single__card--title">
           <h2>{props.item.title}</h2>
         </div>
         <div className="single__card--progressbar">
         <CircularProgressbar className="circleprogressbar" maxValue={100} minValue={0}
          value={props.item.ratio}
          text={`${props.item.totalNumber} %`}
          circleRatio={props.item.ratio} /* Make the circle only 0.7 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: 'round',
              // Rotate the trail
              transformOrigin: 'center center',
              stroke: '#F4F5F9;',
            },
            path: {
             
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
             
              transformOrigin: 'center center',
            
              stroke: `${props.item.bg}`,
            },
            text: {
              
              fill: '#000',
              fontSize:'23px',
              fontWeight:'bold'
            },
            
          }}
          strokeWidth={10}
        />
        
      
         </div>
       
      </div>
  
      
    
  );
};
export default SingleCard;
