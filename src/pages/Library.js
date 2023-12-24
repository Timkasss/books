import Email from "../components/email/Email";
import Filter from "../components/filter/Filter";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Poster from "../components/popular/poster/Poster";

import '../style/library.scss';

import { useEffect, useState } from "react";


const url = 'https://www.googleapis.com/books/v1/volumes?q=education&maxResults=40&filter=ebooks&key=AIzaSyCuF3fjVbdjpRNwBz3TGavhUJ5axwWORRA'
const url2 = 'https://www.googleapis.com/books/v1/volumes?q=fantacy&maxResults=40&filter=ebooks&key=AIzaSyCuF3fjVbdjpRNwBz3TGavhUJ5axwWORRA'

function Library() {
   const [dataBooks, setDataBooks] = useState([])
   const [page, setPage] = useState(1)
   const [countPage] = useState(16)
   useEffect(() => {

      const data = async () => {
         const result = await Promise.all([
            fetch(url)
               .then(response => response.json()),
            fetch(url2)
               .then(response => response.json())
         ])
         setDataBooks([...result[0].items, ...result[1].items])
      }
      data()
   }, []);

   const pageNumbers = [];
   function countPagination() {
      let allBooks = dataBooks.length / countPage;
      for (let i = 1; i <= allBooks; i++) {
         pageNumbers.push(i)
      }
   }
   countPagination()

   let finishValue = countPage * page;
   let firstValue = finishValue - countPage;
   const visiblePage = dataBooks.slice(firstValue, finishValue)

   function nextPage() {
      if (page < pageNumbers.length) {
         setPage(page + 1)
      }
   }
   function backPage() {
      if (page > 1) {
         setPage(page - 1)
      }
   }
   return (
      <>
         <Header />
         <main className="main">
            <div className="main__container">
               <section className="library">
                  <h1 className="library__title">Бібліотека</h1>
                  <header className="library__header">
                     <nav className="bread-crumbs">
                        <ol className="bread-crumbs__list">
                           <li className="bread-crumbs__item">
                              <a href="#" className="bread-crumbs__link">Головна</a></li>
                           <li className="bread-crumbs__item">
                              <a href="#" className="bread-crumbs__link">Бібліотека</a></li>
                           <li className="bread-crumbs__item">
                              <a href="#" className="bread-crumbs__link">Автори</a></li>
                        </ol>
                     </nav>
                     <p className="library__text">
                        Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                     </p>
                     <p className="library__text">
                        Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                     </p>
                     <Filter />
                  </header>
                  <div className="library__books-wrapper">
                     {
                        visiblePage.map((item) => (
                           <Poster books={item} key={item.id} />
                        ))
                     }

                  </div>
                  <div className="library__pagination">
                     <ol className="library__pagination-list">
                        <span className="library__arrow-prev" onClick={backPage}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="31" height="15" viewBox="0 0 31 15" fill="none">
                              <path d="M0.663086 6.7929C0.272562 7.18342 0.272562 7.81659 0.663086 8.20711L7.02705 14.5711C7.41757 14.9616 8.05074 14.9616 8.44126 14.5711C8.83179 14.1805 8.83179 13.5474 8.44126 13.1569L2.78441 7.5L8.44126 1.84315C8.83178 1.45262 8.83178 0.819458 8.44126 0.428934C8.05073 0.0384098 7.41757 0.0384098 7.02705 0.428934L0.663086 6.7929ZM30.8057 6.5L1.37019 6.5L1.37019 8.5L30.8057 8.5L30.8057 6.5Z" fill="white" />
                           </svg>
                        </span>
                        {
                           pageNumbers.map((number, index) => (
                              <li className="library__pagination-item" key={index} onClick={() => setPage(number)}>
                                 <a href="#" className={`library__pagination-link ${number === page ? 'library_link-active' : ''}`}>
                                    {number}
                                 </a>
                              </li>
                           ))
                        }

                        {/* <span className="library__pointers">...</span>
                        <li className="library__pagination-item">
                           <a href="#" className="library__pagination-link">
                              2
                           </a>
                        </li> */}
                        <span className="library__arrow-next" onClick={nextPage}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="31" height="15" viewBox="0 0 31 15" fill="none">
                              <path d="M30.3369 8.20711C30.7274 7.81658 30.7274 7.18342 30.3369 6.79289L23.973 0.428932C23.5824 0.0384078 22.9493 0.0384078 22.5587 0.428932C22.1682 0.819457 22.1682 1.45262 22.5587 1.84315L28.2156 7.5L22.5587 13.1569C22.1682 13.5474 22.1682 14.1805 22.5587 14.5711C22.9493 14.9616 23.5824 14.9616 23.973 14.5711L30.3369 8.20711ZM0.194336 8.5L29.6298 8.5V6.5L0.194336 6.5L0.194336 8.5Z" fill="white" />
                           </svg>
                        </span>
                     </ol>
                  </div>
               </section>
            </div>
         </main>
         <Email />
         <Footer />
      </>
   )
}

export default Library;