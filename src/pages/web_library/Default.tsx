import './Default.css'

import {useNavigate} from 'react-router-dom'

function Default(){
   const navigate = useNavigate();
   

   const handleBookClick = (bookName: string) => {
      navigate(`/book/${bookName}`);
   }

   return (
    <div id='library-body'>      
      <div id='library-header-scope'>
         <div id='library-header-logo-scope'>
            <div id='library-header-logo'/>
         </div>
         <div id='library-header-links'>
            <p><a href="">Reading</a></p>
            <p><a href="">Favorites</a></p>
            <p><a href="">week</a></p>
            <p><a href="">best</a></p>
         </div>
         
      </div>

      <div id='library-introduction-scope'>
         <div id='library-introduction'>
         
            <h4>Start your reading journey today</h4>
         
            <div>
               <h1>Where every page <br/> is a new Adventure</h1>
            </div>
         
            <p>From classics to contemporary, our bookstore offers a <br/> wide selection of books to suit every taste and interest. <br/> Start exploring our shelves today and uncover your next literary gern</p>
         
            <button id='library-introduction-btn'>Search Books</button>
         
         </div>

         <div id='library-introduction-image'/>
      </div>

      <div id="library-menu-scope">
         <div className='library-menu-title' id='best'><h1>Best Sellers</h1></div>
         <div className='library-menu-row'>
            <div className="library-menu-books-area" onClick={() => handleBookClick('poor_folk')} id='library-menu-book-seneca'/>
            <div className="library-menu-books-area" onClick={() => handleBookClick("war_and_peace")} id='library-menu-book-freud'/>
            <div className="library-menu-books-area" onClick={() => handleBookClick("conde")} id='library-menu-book-conde'/>
            <div className="library-menu-books-area" onClick={() => handleBookClick("prince")} id='library-menu-book-prince'/>
            <div className="library-menu-books-area" onClick={() => handleBookClick("poemas")} id='library-menu-book-poemas'/>
         </div>
         <div className='library-menu-title'><h1>Most Recomended</h1></div>
         <div className='library-menu-row'>
            <div className="library-menu-books-area"/>
            <div className="library-menu-books-area"/>
            <div className="library-menu-books-area"/>
            <div className="library-menu-books-area"/>
            <div className="library-menu-books-area"/>
         </div>
      </div>
    </div>
 )
}

export default Default