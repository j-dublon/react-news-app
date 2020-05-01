const modifyDate = (str) => {
  if (str === "") return str;
  const result = `${str.slice(8, 10)}/${str.slice(5, 7)}/${str.slice(0, 4)}`;
  return result;
};

export default modifyDate;
