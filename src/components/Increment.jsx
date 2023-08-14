import { counter } from '../pages/store.js';
import { useState, useEffect } from 'react';

const Increment = () => {
    const [count, setCount] = useState(counter.get());

    useEffect(() => {
        const unsubscribe = counter.subscribe(() => {
          setCount(counter.get());
        });
        return () => unsubscribe();
      }, []);

    const handleClick1 = (env) => {
    env.preventDefault();
    // Counter state is incremented
    counter.set(count + 1);
    setCount(count + 1);
	console.log(count)
    //counter.set(counter.get() + 1);
    const url = `/builtwith.json?value=${Number(count)}`;
    fetch(url, { method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        // Aquí puedes hacer lo que quieras con los datos
    }).catch(error => {console.error(error); });
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '300%',
        width: '100%',
        height: '100%',
        top: '-15%',
        }}>
        Counter Increment
        <div style={{
            fontSize: '120%',
            position: 'relative',
            top: '10vh',
        }}>
            {counter.get()}
        </div>
        <div className="buttons">
            <button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginRight: '5px',
            backgroundColor: 'green',
            borderRadius: '8%',
            color: 'white',
            }}
            onClick={handleClick1}>Increment</button>
            
        </div>
    </div>
  );
}

export default Increment;