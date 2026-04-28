import React, { createContext, useState } from 'react'
// 1 create context
export const searchContext = createContext("")
function SearchContextShare({children}) {
    // 2 Global State creattion
    const [searchKey,setSearchKey]=useState("")
  return (
    // pass value of global state
    <searchContext.Provider value={{searchKey,setSearchKey}}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContextShare
