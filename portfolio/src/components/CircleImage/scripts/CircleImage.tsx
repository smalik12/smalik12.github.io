import React from 'react';

// Imported Styles
import '../style/CircleImage.css';

function CircleImage(props) {
    return (
        <div className="circle-image">
            <img className="profile_photo" src={props.photo} alt="profile" />
        </div>
    );
}

export default CircleImage;
