import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import User from './pages/User';
import UserUpdate from './pages/UserUpdate';

const App = () => {
    return (
        <div className='container mt-5'>
            <Routes>
                <Route index element={<Main />} />
                <Route path={'/user'} >
                    <Route path='' element={<User />} />
                    <Route path={':userId'} element={<UserUpdate />} />
                </Route>
            </Routes>
        </div>
    )
};

export default App;
