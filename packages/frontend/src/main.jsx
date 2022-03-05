import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Spinner from '@project/stories/src/components/atom/Spinner';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
