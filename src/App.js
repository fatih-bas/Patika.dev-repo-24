import "./App.css";
import { useSelector } from "react-redux";
import CardList from "./components/CardList";
import Score from "./components/Score";
import Alert from "./components/Alert";

const App = () => {
  const completed = useSelector((state) => state.cards.completed);

  return (
    <div className="container w-5/6 mx-auto md:w-2/5">
      {completed.length === 30 ? <Alert /> : <Score/>}
      <CardList />
    </div>
  );
};

export default App;
