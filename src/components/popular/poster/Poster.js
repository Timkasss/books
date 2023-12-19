import { useState } from 'react';

import './poster.scss';

import poster from '../../../img/books/filmpreview.png'

function Poster() {
   const [hover, setHover] = useState(false)
   return (
      <article className="film-poster">
         <h1 className="film-poster__name">Побег из Претории</h1>
         <div className="film-poster__poster-wrapper poster-hover"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className="film-poster__hover-background poster-hover__background">
                  <a href='#' className="film-poster__hover-button poster-hover__button">Карточка фильма</a>
               </div>
            }
            <img src={poster} alt="poster" className="film-poster__poster" />
         </div>
         <p className="film-poster__genre">Фантастика, фэнтези, боевик, приключения</p>
         <div className="film-poster__rating">8.50</div>

      </article>
   );
}

export default Poster;
