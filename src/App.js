import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/Home/HomePage';
import Explore from './Components/Pages/Explore/Explore';
import Notification from './Components/Pages/Notification/Notification';
import Messages from './Components/Pages/Messages/Messages';
import Bookmarks from './Components/Pages/Bookmarks/Bookmarks';
import Lists from './Components/Pages/Lists/Lists';
import Profile from './Components/Pages/Profile/Profile';
import More from './Components/Pages/More/More';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
}

export default App;
