import { useEffect, useState } from "react";
import "./App.css";
import { Menu } from "./Menu";

function App() {
  const [cardIsShow, setCardShow] = useState(false);
  const [countShowCard, setCountShowCard] = useState(0);
  const [countHideCard, setCountHideCard] = useState(0);
  const [countUpdateCard, setCountUpdateCard] = useState(0);
  const [cardClick, setCardClick] = useState(0);

  useEffect(() => {
    // Mounting, update and create effect
    setCountUpdateCard(countUpdateCard + 1);

    return () => {
      // Unmounting
      setCountUpdateCard(countUpdateCard + 1);
    }
  }, [cardIsShow]);

  const incrementCardClick = () => {
    setCardClick(cardClick + 1);
  };

  const showHideCard = () => {
    if (cardIsShow) setCountHideCard(countHideCard + 1);
    else setCountShowCard(countShowCard + 1);
    setCardShow(!cardIsShow);
  };

  return (
    <div className="App">
      <div>
        <button onClick={showHideCard}>Show/Hide card</button>
        <div>Showing: {countShowCard}</div>
        <div>Clicked card: {cardClick}</div>
        <div>Hiding: {countHideCard}</div>
        <div>Component updated: {countUpdateCard}</div>
      </div>
      {cardIsShow && <Menu incrementCardClick={incrementCardClick} />}
    </div>
  );
}

export default App;
