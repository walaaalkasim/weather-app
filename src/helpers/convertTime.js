const convertTime = (date) => {
  const time = new Date(date * 1000);
  const realTime = time.toLocaleTimeString();
  return realTime;
};
export default convertTime;
