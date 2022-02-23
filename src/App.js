import { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime'
import Button from './components/Button/Button'

const App = () => {
  const [time, setTime] = useState(0);
  const [interval, changeInterval] = useState(null);
  useEffect(() => {
    let intervalOn = null;
    if(interval == true){
        intervalOn = setInterval(() => {
          console.log(time);
          setTime(prevTime => prevTime+1);
          console.log(time);
        }, 1)
    } else {
      clearInterval(intervalOn)
    }
    return() => clearInterval(intervalOn);
  }, [interval])
  console.log(interval);
  console.log(time);
  return (
    <div className="App">
      <FormattedTime time={time} />
      <Button setTime={setTime} changeInterval={changeInterval}>
      </Button>
    </div>
  );
}

export default App;
