import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
      <Usuario firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <Usuario firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <Usuario firstName="Millard" lastName="Filmore" age={50} hairColor="Brown"/>
      <Usuario firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
