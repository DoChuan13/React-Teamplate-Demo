const getLocalStorage = async (localKey) => {
  return await JSON.parse(localStorage.getItem(localKey));
};

const setLocalStorage = async (localKey, value) => {
  return localStorage.setItem(localKey, JSON.stringify(value));
};

export { getLocalStorage, setLocalStorage };
