import { Header } from './features/common/components/header/header';
import { Home } from './pages/home/home';
import './index.css'

function App() {
  return (
    <>
     <div>
       <Header/>
     </div>

     <main>
      <Home/>
     </main>
    </>
  );
}

export default App
