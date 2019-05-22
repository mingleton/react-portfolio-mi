import React from 'react';
import profilePicture from "../../../static/assets/images/bio/biopic.jpg"

export default function() {
    return (
        <div className= "content-page-wrapper">
        <div className = "left-column"
        style={{
            background: "url(" +profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center" 
        }}
        />

        <div className= "right-column">
        <h2>Bio</h2>
        My name is Michael Ingleton, I am from Orem, Utah and I love to 
        play basketball, soccer, and all other sports. I am a student at
        Utah Valley University studying Business Management and Computer
        Science. I have lived in Utah for most of my life, but spent 
        December 2015 to December 2017 as a Missionary for the Church
        of Jesus Christ of Latter-day Saints in Thailand and Laos. I loved
        that experience and the opportunity to learn a new culture and serve
        the people in those countries. I also am currently a student at Bottega
        to become a full-stack web developer. I love learning about coding and 
        web developement and hope to one day be a full-stack developer.
        </div>    
        </div>
        
    )
}