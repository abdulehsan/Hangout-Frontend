// FILE: src/components/Start.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from './../assets/rb_1305.png';
const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white" style={{ background: 'radial-gradient(circle, rgba(9,9,18,1) 60%, rgba(6,8,33,1) 100%)' }}>
      <header className="text-center mb-10" >
        <h1 className="text-5xl font-bold mb-4">Hangout Chat</h1>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 hover:rounded-full text-white font-bold py-10 px-10 rounded"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 hover:rounded-full text-white font-bold py-10 px-10 rounded"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={pic}
            alt="Chat App"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>
      <footer className="mt-10">
        <a href='github.com/abdulehsan'>Created by Abdullah Ehsan</a>
      </footer>
    </div>
  );
};

export default Start;