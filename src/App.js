import { Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Categories from 'routes/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
