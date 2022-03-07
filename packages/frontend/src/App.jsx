import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Main = lazy(() => import('./pages/Main'));
const Sender = lazy(() => import('./pages/Sender'));
const Decorate = lazy(() => import('./pages/Decorate'));
const Complete = lazy(() => import('./pages/Complete'));
const Storage = lazy(() => import('./pages/Storage'));
const ErrorPage = lazy(() => import('./pages/404'));
function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      {/* 이름 등록 화면  */}
      <Route path={'/main'} element={<Main />} />
      {/* 상장 보내는 화면 */}
      <Route path={'/send/:id'} element={<Sender />} />
      {/* 컬렉션 화면 */}
      <Route path={'/main/:id/storage'} element={<Storage />} />
      <Route path={'/:id/decorate'} element={<Decorate />} />
      <Route path={'/complete'} element={<Complete />} />
      {/* 404 페이지 작업 */}
      <Route path={'/404'} element={<ErrorPage />} />
      <Route path={'/*'} element={<Navigate replace to={'/404'} />} />
    </Routes>
  );
}

export default App;
