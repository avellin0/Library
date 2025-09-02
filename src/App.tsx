import { useState, useEffect } from 'react'
import Mobile from './pages/mobile_library/Mobile';
import Default from './pages/web_library/LibraryPage';

function App() {

  const [width, setwidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleScroll = () => {
      setwidth(window.innerWidth)
    }
    window.addEventListener('resize', handleScroll)

    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  if (width < 500) {
    return <Mobile />
  }
  
  return <Default />
}

export default App
