import React from "react";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [dataCity, setDataCity] = useState({});
  const [dataWeather, setDataWeather] = useState({});
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("Amman");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}`;

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  useEffect(() => {
    setDataCity(data.city);
    setDataWeather(data.list);
  }, [data.city, data.list]);

  useEffect(() => {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [URI]);
  console.log(URI);
  return (
    <MyContext.Provider
      value={{
        data,
        dataCity,
        dataWeather,
        handleChange,
        input,
        setInput,
        handleSubmit,
        search,
        setSearch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
