import './App.css';

import HomePage from './pages/Home';
import {PostProvider} from './context/PostContext';
import {SocialProvider} from './context/SocialContext';
import {TabsProvider} from './context/TabsContext';


function App() {


    return (
        <SocialProvider>
            <TabsProvider>
            <PostProvider>

                <HomePage/>
            </PostProvider>
            </TabsProvider>
        </SocialProvider>

    );
}

export default App;
