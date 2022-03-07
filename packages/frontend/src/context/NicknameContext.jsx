import React, { createContext, useState } from 'react';

const NicknameContext = createContext();

export function NicknameContextProvider({ children }) {
  const [nickname, setNickname] = useState({ sender: '', receiver: '' });
  return (
    <NicknameContext.Provider
      value={{
        nickname,
        setNickname,
      }}
    >
      {children}
    </NicknameContext.Provider>
  );
}

export default NicknameContext;
