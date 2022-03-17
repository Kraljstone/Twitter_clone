import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Explore from './components/Explore/Explore';
import Notification from './components/Notification/Notification';
import Messages from './components/Messages/Messages';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Lists from './components/Lists/Lists';
import Profile from './components/Profile/Profile';
import More from './components/More/More';

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
