import { PokedexProvider } from './globalState/PokedexProvider';
import { Router } from './routes/Router';


function App() {
  return (
    <div>
      <PokedexProvider>
        <Router/>
      </PokedexProvider>
    </div>
  );
}

export default App;
