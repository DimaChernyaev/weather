import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import OneDayPage from './pages/OneDay/OneDay';
import FiveDaysPage from './pages/FiveDays/FiveDays';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<OneDayPage />} />
          <Route path="/days" element={<FiveDaysPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
