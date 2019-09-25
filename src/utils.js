export const apiImgUrl = name => `${process.env.REACT_APP_API_BASE_URL}/img/tours/${name}`;

export const nameCapitalized = name => name.charAt(0).toUpperCase() + name.slice(1);
