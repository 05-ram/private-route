import './App.css';
import { RouterProvider } from 'react-router-dom';
import RouterData from './routes';
import Navbar from './components/Navbar';

function App() {
  const route = RouterData();
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
