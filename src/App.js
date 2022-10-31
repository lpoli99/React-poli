import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {
 let title = <h1> Bienvenido a Repuestos Poli</h1>;
 return(
  <>
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {title}
      </header>
    </div>
  </>
 )
}

export default App;
