import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPicture from "../../../static/assets/images/auth/login.jpg"

export default function() {
    return (
    <div className= "content-page-wrapper">
        <div className ="left-column" 
        style={{
            background: "url(" + contactPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center" 
        }}/>
        
        <div className= "right-column">
            <h2>Contact Info</h2>

            <div className= "contact-bullet-points">
                <div className= "bullet-point-group">
                    <div className= "icon">
                    <FontAwesomeIcon icon="phone" />
                </div>
                <div className = "text">
                    (385) 207-9850
                </div>
                </div>
                

            <div className= "bullet-point-group">
                <div className= "icon">
                    <FontAwesomeIcon icon="envelope" />
                </div>
                <div className = "text">
                    michael.ingleton42@gmail.com
                </div>
                </div>
            

            <div className= "bullet-point-group">
                <div className= "icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                </div>
                <div className = "text">
                    902 N 50 E Provo, Utah
                </div>
            </div>
            </div>

        </div>
    </div>
    )
}