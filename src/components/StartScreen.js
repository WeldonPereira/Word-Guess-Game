import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start-screen">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para iniciar o jogo</p>
      <button onClick={startGame}>Iniciar Jogo</button>
    </div>
  );
};

export default StartScreen;
