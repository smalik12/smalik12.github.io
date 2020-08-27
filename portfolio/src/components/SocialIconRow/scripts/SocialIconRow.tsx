import React from 'react';

// Imported Styles
import '../style/SocialIconRow.css'

// Imported Components
import { SocialIcon } from 'react-social-icons';

// Imported Data
import userData from "../../../user_data.json";

function SocialIconRow() {
    return (
        <div className="social_icons">
            <SocialIcon className="icon-social" network="email" url={"mailto:" + userData.emailAddress} />
            <SocialIcon className="icon-social" network="github" url={userData.githubUrl} />
            <SocialIcon className="icon-social" network="linkedin" url={userData.linkedInProfile} />
        </div>
    );
}

export default SocialIconRow;