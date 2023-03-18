import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import Title from "./components/Title";

interface ResultState {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
  const [ city, setCity ] = useState<string>("");
  const [ result, setResult ] = useState<ResultState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  })
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => { 
        setResult({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
    })
  }
  return (  
    <div className="App">
      <Title />
      <Form 
        setCity = { setCity }
        getWeather = { getWeather }/>
      <Results result = { result } />
    </div>
  );
}

export default App;
