import React, { createContext, useState } from 'react';

const NicknameContext = createContext();

export function NicknameContextProvider({ children }) {
  const [yourNickname, setYourNickname] = useState('');
  return (
    <NicknameContext.Provider value={{
      yourNickname,
      setYourNickname
    }}>
      {children}
    </NicknameContext.Provider>
  );
}

export default NicknameContext;