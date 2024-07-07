import React from 'react'

import money_bg from "../assets/moneyy_bg.png";

const History = () => {
  const style = {
    backgroundImage: `url(${money_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };
  return (
	<div className="bg-white mt-14" style={style}>History page</div>
  )
}

export default History