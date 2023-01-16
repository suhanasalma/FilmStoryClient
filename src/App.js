import logo from './logo.svg';
import './App.css';
import {CssBaseline} from '@mui/material'
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className="">
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
