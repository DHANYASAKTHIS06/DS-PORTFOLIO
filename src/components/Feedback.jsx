import React, { useState, useEffect, useRef } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [emoji, setEmoji] = useState('😶');

  const clickSound = useRef(null);

  useEffect(() => {
    if (rating === 1) setEmoji('😕');
    else if (rating === 2) setEmoji('🙂');
    else if (rating === 3) setEmoji('😄');
    else if (rating === 4) setEmoji('🤩');
    else if (rating === 5) setEmoji('🔥');
    else setEmoji('😶');
  }, [rating]);

  const handleClick = (value) => {
    setRating(value);
    clickSound.current.play();
  };

  return (
    <div className="feedback-page">
      {/* Neon Morphing Background Shape */}
      <div className="neon-shape"></div>

      <audio ref={clickSound} src="/click.mp3"></audio>

      <div className="feedback-container">
        <h2 className="feedback-title">✨ Rate My Website ✨</h2>

        <div className="emoji-display">{emoji}</div>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${value <= (hover || rating) ? 'filled' : ''}`}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <p className="feedback-text">
          {rating === 0
            ? 'Select a rating to give feedback!'
            : `Thank you for you rating! You rated ${rating} star${
                rating > 1 ? 's' : ''
              }!`}
        </p>
      </div>
    </div>
  );
};

export default Feedback;
