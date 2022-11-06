import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";

import PropTypes from 'prop-types';

// import { MainPage, ComicsPage,  SingleComicPage} from '../pages';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));




    const App = () => {

    return (
         <Router>
            <div className="app">
             <AppHeader/>
            <main>
           <Suspense fallback={<Spinner/>}>
           <Routes>
                    <Route end path="/" element={<MainPage/>}/>
                    <Route end path="/comics" element={<ComicsPage/>}/>
                    <Route end path="/comics/:comicsId" element={<SingleComicPage/>}/>

                    <Route end path="*" element={<Page404/>}/>
                     
                </Routes>
           </Suspense>
            </main>
            </div>
         </Router>
     )
    }



    App.propTypes = {
    onCharSelected: PropTypes.func

}


export default App;




