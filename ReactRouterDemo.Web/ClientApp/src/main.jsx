import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const SimpleComponent = () => {
//     return <h1>Hello World</h1>;
// }

// class BorderedComponent extends React.Component {
//     render() {
//         return <>
//             <div style={{ border: '5px solid red' }}>
//                 {this.props.children}
//             </div>
//         </>
//     }
// }



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)