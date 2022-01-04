import { useContext } from "react";
import MyContext from "../context/MyContext";

const CityWeather = () => {
  const context = useContext(MyContext);
  const { dataWeather } = context;

  return (
    <div>
      {/* <select>
        {dataWeather.map((item, index) => (
          <option>{convertTime(item.dt)}</option>
        ))}
      </select> */}
      {/* <select>
        {dataWeather.map((item, index) => (
          <option>{item.dt_txt}</option>
        ))}
      </select> */}

      <h3>Call 5 day / 3 hour forecast data :</h3>

      <span className="temp_max">
        {dataWeather.map((item, index) => (
          <span className="single_data">
            <p>{item.dt_txt}</p>
            <p> max : {Math.round(item.main.temp_max - 273)} </p>
            <p> min: {Math.round(item.main.temp_min - 273)} </p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt=""
            />
            <p>{item.weather[0].description}</p>
            <p> wind speed :{item.wind.speed} km/h</p>
          </span>
        ))}
      </span>
    </div>
  );
};

export default CityWeather;
