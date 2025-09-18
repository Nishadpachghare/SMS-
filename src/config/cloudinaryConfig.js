export const cloudinaryConfig = {
    cloudName: 'dk0ehzodv',
    apiKey: '163925927261136',
    apiSecret: 'FlvYmgR6O0JeFYVlDtGNsOStt48',
    secure: true
};

export const getImageUrl = (publicId, options = {}) => {
    const defaultOptions = {
        secure: true,
        quality: 'auto',
        fetchFormat: 'auto',
        ...options
    };
    
    const transformations = Object.entries(defaultOptions)
        .map(([key, value]) => `${key}_${value}`)
        .join(',');

    return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformations}/${publicId}`;
};