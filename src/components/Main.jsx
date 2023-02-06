import React from "react"
export default function Main(props){
    return (
        <div className="main">
            <img src={`../../assets/${props.imageUrl}`} className="location--image" alt="" />
            <div className="location--data">
                <div className="location--info">
                    <img src="../../assets/locationIcon.png" alt="" />
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="paragraph-date">{props.startDate} - {props.endDate}</p>
            <p className="paragraph">{props.description}</p>
            </div>
        </div>
    )
}