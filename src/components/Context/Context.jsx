import React, { Children, createContext, useContext, useState } from 'react'

const MyContext = createContext()

export const Context = ({children}) => {
    const [count, setCount]= useState(0)
    const inc = () => {
        setCount(count + 1)
    }
    const dec =() => {
        setCount(count - 1)
    }
  return (
    <MyContext.Provider value={{count, inc, dec}}>{children}</MyContext.Provider>
  )
} 

export const useMyContext = () => useContext(MyContext)