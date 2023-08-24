import React from "react";

const AccordionItem = ({ num, title, text }) => {
  return (
    <div className="item">
      <p className="number">{num > 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
};

export default AccordionItem;
