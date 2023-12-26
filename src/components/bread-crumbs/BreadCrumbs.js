import './breadCrumbs.scss';

function BreadCrumbs() {
   return (
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
   )
}
export default BreadCrumbs;