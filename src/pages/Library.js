import Email from "../components/email/Email";
import Filter from "../components/filter/Filter";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Poster from "../components/popular/poster/Poster";

import '../style/library.scss';
function Library() {
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
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
                     <Poster />
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