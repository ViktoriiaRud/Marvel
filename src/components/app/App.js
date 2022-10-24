
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";

import PropTypes from 'prop-types';

import { MainPage, ComicsPage, Page404 } from '../pages';

    const App = () => {

    return (
         <Router>
            <div className="app">
             <AppHeader/>
            <main>
                <Routes>
                    <Route end path="/" element={<MainPage/>}/>
                    <Route end path="/comics" element={<ComicsPage/>}/>
                    

                    <Route end path="*" element={<Page404/>}/>
                     
                </Routes>
            </main>
            </div>
         </Router>
     )
    }



    App.propTypes = {
    onCharSelected: PropTypes.func

}


export default App;




