export const apiImgUrl = (name, group = 'tours') => `${process.env.REACT_APP_API_BASE_URL}/img/${group}/${name}`;

export const nameCapitalized = name => name.charAt(0).toUpperCase() + name.slice(1);

export const convertDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
};
