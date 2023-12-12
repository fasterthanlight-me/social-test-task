import {createContext, useState} from 'react';

const initialState = {
    textContent: '',
    files: [],
    link: ''
}
 const PostContext = createContext(initialState);


// eslint-disable-next-line react/prop-types
export const PostProvider = ({children}) => {
    const [post, setPost] = useState(initialState)
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return <PostContext.Provider value={{post, setPost}}>{children}</PostContext.Provider>
}
export default PostContext
