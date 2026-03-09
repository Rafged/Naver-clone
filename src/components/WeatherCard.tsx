import { useEffect, useState } from "react";
import { CloudSun } from "lucide-react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
  }[];
}

function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric&lang=kr`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: WeatherData = await response.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather error:", err);
        setWeather(null);
        setError("날씨 정보를 아직 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (!API_KEY) {
      setError("API key가 없습니다.");
      setLoading(false);
      return;
    }

    fetchWeather();
  }, [API_KEY]);

  return (
    <section className="card weather-card">
      <div className="section-header">
        <h2>날씨</h2>
        <button className="text-btn">지역 설정</button>
      </div>

      {loading && <p>Loading weather...</p>}
      {!loading && error && <p>{error}</p>}

      {!loading && !error && weather && (
        <>
          <div className="weather-main">
            <div className="weather-icon-wrap">
              <CloudSun size={42} />
            </div>

            <div>
              <strong className="temp">{Math.round(weather.main.temp)}°</strong>
              <p className="weather-desc">{weather.weather[0].description}</p>
            </div>
          </div>

          <div className="weather-extra">
            <p>{weather.name}</p>
            <p>
              최고 {Math.round(weather.main.temp_max)}° / 최저 {Math.round(weather.main.temp_min)}°
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default WeatherCard;