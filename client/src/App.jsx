import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* มี Component Context อีกอันที่ Render อยู่ใน Component Header */}
    </div>
  );
}

export default App;
