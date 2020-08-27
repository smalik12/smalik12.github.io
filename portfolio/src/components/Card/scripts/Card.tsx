import React from 'react';

// Imported Components
import CircleImage from '../../CircleImage/scripts/CircleImage';
import SocialIconRow from '../../SocialIconRow/scripts/SocialIconRow';

// Imported Data
import userData from '../../../user_data.json';

function Card(props) {
    return (
        <div className="background-view">
            <div className="content-container">
                <div className="holder">
                    <CircleImage photo={props.profilePhoto} />
                    <div className="person-info-container">
                        <h2 className="name">{userData.name}</h2>
                        <p className="occupation">{userData.occupation}</p>
                    </div>
                </div>

                <SocialIconRow />
            </div>
        </div>
    )
}

export default Card;