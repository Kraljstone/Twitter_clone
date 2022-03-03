import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/WidgetsBar/Widgets';

function App() {
  return (
    <div className="app">
      <div className="layout">
        <div className="sidebar">
          {/* SIDEBAR */}
          <Sidebar />
        </div>
        <div className="feed">
          {/* FEED */}
          <Feed />
        </div>
        <div className="widgets">
          {/* WIDGETHS */}
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
