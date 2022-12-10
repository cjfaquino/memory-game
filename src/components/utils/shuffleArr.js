const shuffleArr = (array) => {
  const temp = array.slice();
  temp.sort(() => Math.random() - 0.5);
  return temp;
};

export default shuffleArr;
