import React, { useState } from "react";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Video from "./components/Video/Video";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleCityChange = (inputValue) => {
    setInputValue(inputValue);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <Header />
          <Search onChange={handleCityChange} />
          <Description inputValue={inputValue} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
