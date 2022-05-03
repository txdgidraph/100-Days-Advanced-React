import './App.css';
import Counter from "./components/counter";
import GreetText from './components/greet-text';
import BusCounter from './components/bus-station';
import FunctionDes from "./components/function-destructure";
import ClassDes from "./components/class-destructure";
import FunctionClick from "./components/function-click";
import ClassClick from './components/class-click';
import EventBinding from './components/bind-events';
import ParentComponent from './components/parent-component';
import UserGreeting from './components/user-greeting';
function App() {
  return (
    <div>
      {/* <GreetText name="John"/>
      <Counter/> */}
      {/* <BusCounter/> */}
      {/* <FunctionDes name="Tonny" heroName="Giddy"/> */}
      {/* <ClassDes name="Giddy" heroName="Tonny"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBinding/> */}
      {/* <ParentComponent/> */}
      <UserGreeting/>
    </div>
  );
}

export default App;
