import { useContext } from "react";
import "./App.css";
import MyContext from "./context/MyContext";
import CityData from "./components/CityData";
import CityWeather from "./components/CityWeather";
import CitySearch from "./components/CitySearch";
const App = () => {
  const context = useContext(MyContext);
  const { dataCity, dataWeather } = context;
  return (
    <main>
      <CitySearch />
      {dataCity && <CityData />}
      {dataWeather && dataWeather.length > 0 && <CityWeather />}
    </main>
  );
};

export default App;
