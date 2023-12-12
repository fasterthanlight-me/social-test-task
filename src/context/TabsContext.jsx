import {createContext, useState} from 'react';

const initialState = []
 const TabsContext = createContext(initialState);


// eslint-disable-next-line react/prop-types
export const TabsProvider = ({children}) => {
    const [tabs, setTabs] = useState(initialState)
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return  <TabsContext.Provider value={{tabs, setTabs}}>{children}</TabsContext.Provider>
}
export default TabsContext
