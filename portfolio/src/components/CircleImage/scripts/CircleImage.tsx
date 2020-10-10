import React, { PropsWithChildren } from 'react';

// Imported Styles
import '../style/CircleImage.css';

interface ICircleImageProps extends PropsWithChildren<any> {
    photo: string
}

export const CircleImage: React.FC<ICircleImageProps> = (props: ICircleImageProps) => {
    return (
        <div className="circle-image">
            <img className="profile_photo" src={props.photo} alt="profile" />
        </div>
    );
}
