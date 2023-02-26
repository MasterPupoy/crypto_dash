import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="flex flex-row flex-1 min-h-screen">
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default App;
