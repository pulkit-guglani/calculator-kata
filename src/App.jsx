import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
       <Calculator />
       </div>
      </header>
    </div>
  );
}

export default App;
