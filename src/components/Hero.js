import React from "react";
import maplogo from '../images/map-logo.jpeg'

export default function Hero({item}) {
    console.log(item);
    return (
        <div className="hero">
            <div className="hero__img--container">
                <img className="hero__img" src={item.imageUrl} alt="mountain" />
            </div>
            <div className="hero__title--description">
                <div className="hero__loc--ap">
                    <img className="hero__logo" src={maplogo} alt="map logo" />
                    <h4 className="location">{item.location}</h4>
                    <a className="hero__map--link" href={item.googleMapsLink}>
                        view on Google Maps
                    </a>
                </div>
       
                <div className="hero__description">
                    <h2 className="title">{item.title}</h2>
                    <span className="hero__date">{item.startDate} - {item.endDate}</span>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}