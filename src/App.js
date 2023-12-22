import MainContent from "./components/mainComponent/MainContent";
import Sidebar from "./components/sideBar/sidebar";



function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
