import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Layout from './Layout';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path ="/" element ={token ? <Home/>: <Navigate to='/signin' />}/>
          <Route path="/signup" element= {<SignUp/>}/>
          <Route path="/signin" element= {<SignIn/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
