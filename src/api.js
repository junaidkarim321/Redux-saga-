export const fetchData = async () => {
  try {
    const response = await fetch("https://pub.gamezop.com/v3/games?id=4805");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
