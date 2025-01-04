/* eslint-disable @next/next/no-img-element */
import React from "react";
import "@/app/styles/propertiesWidget.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBath, faBed, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { PrpertieesWidgetTypes } from "@/app/types/main";

export default function PropertiesWidget(props: PrpertieesWidgetTypes) {
  return (
    <div className="product-widget" id={props.id}>
      <div className="product-pic">
        <img className="pic" src={props.image} alt="villa-pic" />
      </div>
      <div className="description">
        <h2 className="title">{props.title}</h2>
        <p className="description-text">{props.description}</p>
      </div>
      {/* <div className="more-details">
        <div className="bedrooms">
          <FontAwesomeIcon className="icon" icon={faBed} />
          <p>{props.bedrooms}-Bedrooms</p>
        </div>
        <div className="bathrooms">
          <FontAwesomeIcon className="icon" icon={faBath} />
          <p>{props.bathrooms}-Bathrooms</p>
        </div>
        <div className="type-of-building">
          <FontAwesomeIcon className="icon" icon={faBuilding} />
          <p>{props.typeOfBuilding}</p>
        </div>
      </div> */}
      <div className="actions">
        <div className="price-tag">
          <p className="price">Price</p>
          <p className="currency">{props.price}</p>
        </div>
        {/* <button className="action-btn">View Property Details</button> */}
      </div>
    </div>
  );
}
