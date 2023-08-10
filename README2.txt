import React, { useState } from 'react';

const TextValidation: React.FC = () => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
    setIsValid(newText.length > 3);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {isValid ? (
        <p>O texto possui mais de 3 caracteres.</p>
      ) : (
        <p>O texto deve ter pelo menos 3 caracteres.</p>
      )}
    </div>
  );
};

export default TextValidation;