import './breadCrumbs.scss';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BooksContext } from '../context';
function BreadCrumbs() {
   const { dataBooks } = useContext(BooksContext);
   const path = useLocation().pathname;
   const lastMean = path.split('/');

   const name = dataBooks.find(item => item.id === lastMean[lastMean.length - 1])

   function breadCrumbs() {
      if (path === '/library') {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
            </ol>
         )
      } else if (path === '/news') {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Статті</Link></li>
            </ol>
         )
      }
      else if (lastMean[lastMean.length - 1] === name.id) {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
               <li className="bread-crumbs__item">
                  <a className="bread-crumbs__link">{name.volumeInfo.title}</a></li>
            </ol>
         )
      }
   }

   return (
      <nav className="bread-crumbs">
         {breadCrumbs()}
      </nav>
   )
}
export default BreadCrumbs;