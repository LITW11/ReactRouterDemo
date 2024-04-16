import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Layout from './Layout';


class App extends React.Component {
    render() {
        return (
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/pageone' element={<PageOne />} />
                    <Route path='/pagetwo' element={<PageTwo />} />
                </Routes>
            </Layout>
        )

    }
}

export default App;