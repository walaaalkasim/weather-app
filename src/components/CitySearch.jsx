import { useContext } from "react";
import MyContext from "../context/MyContext";

const CitySearch = () => {
  const context = useContext(MyContext);
  const { input, handleChange, handleSubmit } = context;
  return (
    <form>
      <input
        type="text"
        maxLength="20"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleSubmit(e)}>search</button>
    </form>
  );
};

export default CitySearch;
