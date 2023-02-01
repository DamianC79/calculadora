import './App.css';
import words from 'lodash.words';
import Resultado from './components/Resultado';
import Numeros from './components/Numeros';
import Operaciones from './components/Operaciones';
import Funciones from './components/Funciones';
import { useState } from 'react';

function App() {
  const [useOperacion, setUseOperacion] = useState("")

  const items = words(useOperacion, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length-1] : "0"
  console.log("renderizacion de app", value)
   
  return (
    <main className="react-calculator">
      
        <Resultado value={value}/>
        <Numeros onClickNumber={numero => {setUseOperacion(`${useOperacion}${numero}`)
        }}/>
        
        <Funciones 
          onContentClear={()=> {setUseOperacion("")}}
          onDelete={()=>{ 
            if(useOperacion > 0)
            {
              const newUseOperacion = useOperacion.substring(0, useOperacion.length - 1)
              setUseOperacion(newUseOperacion)
            }
          }}
        />
        <Operaciones 
          onClickOperation={operation => {setUseOperacion(`${useOperacion}${operation}`)}}
          onClickEqual={equal => {
            // eslint-disable-next-line
            setUseOperacion(eval(useOperacion).toString())
          }}
        />
       
      
    </main>
  );
}

export default App;
