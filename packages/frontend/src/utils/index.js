export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);

  if (!item || item === 'undefined') return null;

  return JSON.parse(item);
};
