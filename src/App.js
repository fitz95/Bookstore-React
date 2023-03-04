import { Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Categories from 'routes/Categories';
import './css/App.css';

function App() {
  return (
    <div className="bookstore-cms">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
