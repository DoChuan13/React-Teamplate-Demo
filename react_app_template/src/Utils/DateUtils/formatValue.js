//Currency Format
export const formatCurrencyType = (currValue, languageCode, currencyCode) => {
  let options = {
    style: "currency",
    currency: currencyCode,
  }; // Optional for other object
  return currValue.toLocaleString(languageCode, options);
};

//Date Format
export const formatDateType = (dateValue, languageCode) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateValue.toLocaleDateString(languageCode, options);
};

//Time Format
export const formatTime = (timeValue, languageCode) => {
  return timeValue.toLocaleTimeString(languageCode);
};
