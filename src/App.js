import './App.css';
import Weather from './components/Weather';
import WeatherContextProvider from './context/WeatherContext';





function App() {
  return (
    <WeatherContextProvider>
      <Weather />
    </WeatherContextProvider>

  );
}

export default App;
