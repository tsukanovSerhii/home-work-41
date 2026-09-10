import React, { Suspense, useState } from 'react';
import MessageComponent from './components/MessageComponent';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Симуляція асинхронного запиту до сервера
const fetchMessage = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Не вдалося завантажити повідомлення з сервера."));
      } else {
        resolve("Привіт! Це повідомлення завантажено асинхронно за допомогою хука use().");
      }
    }, 2000);
  });
};

function App() {
  const [messagePromise, setMessagePromise] = useState(null);

  const handleLoadMessage = (shouldFail) => {
    setMessagePromise(fetchMessage(shouldFail));
  };

  return (
    <div className="app-container">
      <h1>Робота з хуком use() в React</h1>
      
      <div className="controls">
        <button onClick={() => handleLoadMessage(false)}>
          Завантажити повідомлення
        </button>
        <button className="error-btn" onClick={() => handleLoadMessage(true)}>
          Симулювати помилку
        </button>
      </div>

      <div className="content-area">
        {messagePromise ? (
          <ErrorBoundary>
            <Suspense fallback={<div className="loading">Завантаження... ⏳</div>}>
              <MessageComponent messagePromise={messagePromise} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <p className="placeholder">Натисніть кнопку, щоб завантажити дані.</p>
        )}
      </div>
    </div>
  );
}

export default App;
