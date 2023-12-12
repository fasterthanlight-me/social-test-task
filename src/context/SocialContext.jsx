import {createContext, useState} from 'react';
import {socials} from '../common/constants';

const initialState = socials
 const SocialContext = createContext(initialState);


// eslint-disable-next-line react/prop-types
export const SocialProvider = ({children}) => {
    const [socialMediaList, setSocialMediaList] = useState(initialState)
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return  <SocialContext.Provider value={{socialMediaList, setSocialMediaList}}>{children}</SocialContext.Provider>
}
export default SocialContext
