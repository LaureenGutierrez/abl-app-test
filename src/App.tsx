import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeViewModel from './viewModels/home/homeViewModel';

function App() {
  return (
    <div className="App">
      <HomeViewModel />
    </div>
  );
}

export default App;
