import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.imageUrl}/>
            <div className='card-info'>
                <div className='location'>
                    <img src='./img/loc.png'/>
                    <span className="country">{props.location}</span>
                    <a href={props.googleMapsUrl} className='google-url'>View on Google Maps</a>
                </div>
                <h3 className='title'>{props.title}</h3>
                <div className='time'>
                    <span>{props.startDate} - </span>
                    <span>{props.endDate}</span>
                </div>
                <div className='description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}