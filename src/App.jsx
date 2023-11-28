import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
