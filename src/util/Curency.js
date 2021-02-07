const Curency = (value, dollor) => {
  const result = Number(value).toLocaleString("en");
  return dollor ? `${result} $` : result;
};

export default Curency;
