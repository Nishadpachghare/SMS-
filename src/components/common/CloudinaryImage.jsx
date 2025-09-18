import React from 'react';
import { Image } from 'cloudinary-react';

const CloudinaryImage = ({ 
    publicId, 
    alt, 
    className,
    width,
    height,
    ...props 
}) => {
    return (
        <Image
            publicId={publicId}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading="lazy"
            secure={true}
            {...props}
        />
    );
};

export default CloudinaryImage;