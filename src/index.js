import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
