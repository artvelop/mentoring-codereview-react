import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleClickMove = () => {
    navigate('/hello');
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleClickMove}>HELLO</button>
    </div>
  );
};
