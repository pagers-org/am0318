import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Main = lazy(() => import('./pages/Main'));
const Decorate = lazy(() => import('./pages/Decorate'));
const Complete = lazy(() => import('./pages/Complete'));

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      {/* 이름 등록 화면  */}
      <Route path={'/main'} element={<Main />} />
      {/* 상장 보내는 화면 */}
      <Route path={'/main/:id'} element={<Main />} />
      {/* 컬렉션 화면 */}
      <Route path={'/main/:id/storage'} element={<Main />} />
      <Route path={'/decorate'} element={<Decorate />} />
      <Route path={'/complete'} element={<Complete />} />
    </Routes>
  );
}

export default App;
