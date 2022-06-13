import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Landing />
                    {/* <Link to="/about"><About /></Link>
                    <Link to="/shop"><Shop /></Link> */}
                        {/* <Routes>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/shop" component={Shop} />
                        </Routes> */}
                    <Chatbot />
                </div>
            </BrowserRouter>
        </div>
        // <div>
        //     <BrowserRouter>
        //         <div>
        //             <Header />
        //             <Route exact path="/" component={Landing} />
        //             <Route exact path="/about" component={About} />
        //             <Route exact path="/shop" component={Shop} />
        //             <Chatbot />
        //         </div>
        //     </BrowserRouter>
        // </div>
    )
}

export default App;