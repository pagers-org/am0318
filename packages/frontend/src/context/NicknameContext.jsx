import React, { createContext, useState } from 'react';

export const NicknameContext = createContext();

export function NicknameContextProvider({ children }) {
  const [nickname, setNickname] = useState('');
  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
}
