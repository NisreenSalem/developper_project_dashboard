import React from 'react'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>  1 PM</p>
          <p >🔵 157K</p>
        </div>
      );
    }
  
    return null;
  };

 export default CustomTooltip 