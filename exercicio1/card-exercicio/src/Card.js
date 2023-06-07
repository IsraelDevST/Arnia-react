import React from "react";
import "./Card.css"

const Card = ({title, subtitle, content}) => {
    return (
  <div className="Middle"> 
    <div className="card">
          <div className="card-body"> 
           {title && <h5 className="card-title">{title}</h5>}
           {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
           {content && <p className="card-text">{content}</p>}

          </div>
    </div>
   </div>
  );
};

export default Card;