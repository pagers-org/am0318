import React, { createContext, useState } from 'react';

const NicknameContext = createContext();

export function NicknameContextProvider({ children }) {
  const [nickname, setNickname] = useState('');
  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
}
