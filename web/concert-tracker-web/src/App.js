import React, {useState} from 'react';
import './App.css';
import {
  Container,
  Toolbar,
  Typography,
  Box,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Context from './Context';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'Search', 'Friends'];
  const settings = ['My Profile', 'Settings', 'Stats', 'Logout'];
  const context = {
    name: '',
    userId: '',
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuNav = () => {};

  return (
    <>
      <Context.Provider value={context}>
        <Navbar />
        {/* <App /> */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Context.Provider>
    </>
  );
}
export default App;
