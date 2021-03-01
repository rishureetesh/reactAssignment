//import logo from './logo.svg';
//import './App.css';
import "./components/header";
import Header from "./components/header";
import Main from "./components/main"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
