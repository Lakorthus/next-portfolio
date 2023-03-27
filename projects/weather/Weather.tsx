import { useEffect, useState } from 'react';

export interface IWeather {}

const Weather: React.FC<IWeather> = () => {
  const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('London');
  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${NEXT_PUBLIC_API_KEY}`
  );

  const searchLocation = (event: any) => {
    event.preventDefault();
    if (event.key === 'Enter' || event.type === 'click') {
      if (location === '') setLocation('London');
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${NEXT_PUBLIC_API_KEY}`
      );
    }
  };
  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod === 200) {
        setData(data);
      } else {
        alert('Please enter a valid location');
        setLocation('London');
      }
    };
    try {
      fetchWeather();
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return (
    <>
      <div className="flex w-full justify-around mb-6 p-2">
        <div className="flex items-top justify-around">
          <div className="flex items-center justify-around w-full">
            <h2 className={`text-center text-2xl mb-2  `}>{data.name}</h2>
            <div className="flex items-center justify-center w-full ">
              {data.main ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-20 h-20"
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt="weather icon"
                />
              ) : null}
              {data.main ? (
                <h2 className={`text-2xl ml-2 mb-2 `}>
                  {data.main.temp.toFixed()}°C
                </h2>
              ) : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="flex flex-col ml-3 items-center">
              {data.weather ? (
                <p
                  className={`font-light font-mono text-sm transition-all duration-200 text-light-content-text hover:font-bold hover:text-light-hot`}
                >
                  {data.weather[0].description.toUpperCase()}
                </p>
              ) : null}
              {data.main ? (
                <p
                  className={`font-light font-mono text-sm transition-all duration-200 text-light-content-text hover:font-bold hover:text-light-hot`}
                >
                  Feels Like: {data.main.feels_like.toFixed()}°C
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={searchLocation}
        className="flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="input pl-4"
        />
        <button onClick={searchLocation} className="btn ml-3" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Weather;
