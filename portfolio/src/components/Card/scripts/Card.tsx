import React, { PropsWithChildren, useState, useEffect } from 'react';

// Imported Style
import '../style/Card.css';

// Imported Components
import { CircleImage } from '../../CircleImage/scripts/CircleImage';
import { SocialIconRow } from '../../SocialIconRow/scripts/SocialIconRow';

// Imported Data
import userData from '../../../user_data.json';

interface ICardProps extends PropsWithChildren<any> {
    profilePhoto: string
}

export const Card: React.FC<ICardProps> = (props: ICardProps) => {
    const [data, setData] = useState<string[]|undefined>(undefined);

    useEffect(() => {
        setData(["1", "2", "3"]);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

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