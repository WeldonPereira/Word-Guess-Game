import { useRef, useState } from "react";
import "./GameScreen.css";

const GameScreen = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter.toLocaleUpperCase());
    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div className="game-screen">
      <p className="points">
        <span>Pontuação atual: {score}</span>
      </p>
      <h1>Descubra a palavra:</h1>
      <h3 className="tip">
        Sugestão: <span>{pickedCategory}</span>
      </h3>

      <p>Você ainda tem {guesses} tentativa(s).</p>

      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="letterContainer">
        <p>Insira uma letra para tentar descobrir a palavra:</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Confirmar</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já tentadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
