import React from "react";
import "./App.css";

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <body>
      <section>
        <nav>
          <ul>
            <li>
              <a href="#">Contador</a>
            </li>
            <li>
              <a href="#">Cronómetro</a>
            </li>
            
            
          </ul>
          
        </nav>
      </section>

      <h1 className="marcos"> CronoRetard </h1>
      <div className="temp">
        <div className="cronometro">
          <div>
            <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div>
            {!timerOn && time === 0 && (
              <button class="button-50" role="button" onClick={() => setTimeOn(true)}>
                Inicio
              </button>
            )}
            {timerOn && (
              <button class="button-50" role="button" onClick={() => setTimeOn(false)}>
                Detener
              </button>
            )}
            {!timerOn && !time == 0 && (
              <button class="button-50" role="button" onClick={() => setTimeOn(true)}>
                Continuar
              </button>
            )}
            {!timerOn && time > 0 && (
              <button class="button-50" role="button" onClick={() => setTime(0)}>
                Reiniciar
              </button>
            )}
          </div>
        </div>
  
          
      </div>
    </body>
  );
}

export default App;
