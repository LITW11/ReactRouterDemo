import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return <>
            <h1>Home page!</h1>
            <Link to='/pageone'>
                <button className='btn btn-primary'>Page One</button>
            </Link>
            <Link to='/pagetwo'>
                <button className='btn btn-dark'>Page Two</button>
            </Link>
        </>
    }
}


export default HomePage;