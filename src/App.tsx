import { useState, useEffect } from 'react'
import Mobile from './pages/mobile_library/Mobile';
import Default from './pages/web_library/Default';
// import BookReader from './pages/book_reader/book_reader';

function App() {

  const [width, setwidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleScroll = () => {
      setwidth(window.innerWidth)
    }

    window.addEventListener('resize', handleScroll)

    return () => window.removeEventListener('resize', handleScroll);
  }, []);


  if(width < 500){
    return <Mobile/>
  }

  return <Default />
  // return <BookReader />

}

export default App
