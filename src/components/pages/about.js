import React from 'react';
import profilePicture from "../../../static/assets/images/about/profilepicture.jpg";

export default function() {
    return (
        <div className= "content-page-wrapper">
        <div className = "left-column"
        style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center" 
        }}
        />

        <div className= "right-column">
        <h2>Bio</h2>
        My name is Michael Ingleton, I am from Orem, Utah. I love music and I 
        play the guitar, piano and am learning music production. I enjoy 
        playing basketball, soccer, and all other sports. I am a student at
        Utah Valley University studying Information Systems with a concentration
        on Application Development. I have lived in Utah for most of my life, but spent 
        December 2015 to December 2017 as a Missionary for the Church
        of Jesus Christ of Latter-day Saints in Thailand and Laos. I loved
        that experience and the opportunity to learn a new culture and serve
        the people in those countries. I am also a Bottega tech school graduate
        in full-stack web development. I love learning about coding and 
        web developement and hope to one day be a full-stack developer.
        </div>    
        </div>
        
    )
}