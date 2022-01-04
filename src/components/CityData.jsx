import { useContext } from "react";
import MyContext from "../context/MyContext";
import convertTime from "../helpers/convertTime";

import { WiSunrise, WiSunset } from "react-icons/wi";

const CityData = () => {
  let sunrise, sunset;

  const context = useContext(MyContext);
  const { dataCity } = context;

  if (dataCity.sunrise) {
    sunrise = convertTime(dataCity.sunrise);
    sunset = convertTime(dataCity.sunset);
  }

  return (
    <div>
      <h2 className="city">City : {dataCity.name}</h2>
      <div className="container">
        <WiSunrise />
        <p className="sun_rise_set">sunrise: {sunrise}</p>
        <WiSunset />
        <p className="sun_rise_set">sunset: {sunset}</p>
      </div>
    </div>
  );
};

export default CityData;
