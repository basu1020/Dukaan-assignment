import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Overview from './components/Overview';

function App() {

  return (
    <>
      <Theme accentColor='gray' scaling="90%">
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
            <Overview/>
          </div>
        </div>
      </Theme>
    </>
  )
}

export default App
