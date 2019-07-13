import React, { Component } from 'react'
// import "./style.css";



export default class ServiceCards extends Component( props ) {

    render() {

        return (
            <div className='card' onClick={props.pictureClick} >
                <div className='img-container'>
                    <img alt={props.id} src={props.image} />
                </div>
                <div className='content'>
                    {/* <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.position}
                    </li>
                </ul> */}


                </div>

            </div>
        )
    }
}


export default ServiceCards