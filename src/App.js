import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Products from './Products';
import Search from './Search';

const App = () => (
  <HashRouter initialEntries={['/']} initialIndex={0}>
    <Search />
    <main>
      <Routes>
        <Route exact path="/" element={
          <Navigate to="/1" />} />
        <Route path="/:page" element={<Products />} />
      </Routes>
    </main>
  </HashRouter>
);

export default App;
