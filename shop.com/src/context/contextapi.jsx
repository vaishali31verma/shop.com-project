import React, { createContext} from 'react'

const AppContext = createContext()


const Contextapiprovider = ({children}) => {
  return (
    <div>
      <AppContext.Provider value ={{}}> 
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default Contextapiprovider
