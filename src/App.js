import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div>
      {console.log(localStorage.getItem('user'))}
      <Routes/>
    </div>
  );
}

export default App;
