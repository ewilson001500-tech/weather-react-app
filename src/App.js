import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/ewilson001500-tech"
            target="_blank"
            rel="noreferrer"
          >
            Erin Wilson
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/ewilson001500-tech/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
