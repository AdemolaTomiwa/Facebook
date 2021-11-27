import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from './screens.js/Authentication';
import Registration from './screens.js/Registration';

function App() {
   return (
      <Router>
         <div className="container">
            <Routes>
               <Route path="/" element={<Authentication />} />
               <Route path="/register" element={<Registration />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
