import { useEffect, useState } from "react";
import "./styles.css";

function Card({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
    </div>
  );
}

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((err) => console.error("Error fetching data: " + err));
  }, []);
  return (
    <div className="App">
      {countries.map((country) => (
        <Card
          key={country.cca3}
          image={country.flags.png}
          name={country.name.common}
        />
      ))}
    </div>
  );
}
