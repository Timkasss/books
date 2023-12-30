import './gallery.scss';
import photo1 from '../../img/page-person/gallery1.png';
import photo2 from '../../img/page-person/gallery2.png';
import photo3 from '../../img/page-person/gallery3.png';
import photo4 from '../../img/page-person/gallery4.png';
import photo5 from '../../img/page-person/gallery5.png';
import photo6 from '../../img/page-person/gallery6.png';

function Gallery() {
   return (
      <section className="gallery">
         <div className="gallery__head-wrapper">
            <h1 className="gallery__title section_title">Фото</h1>
            <a href="#" className="gallery__link">Всі фото</a>
         </div>
         <div className="gallery__images-wrapper">
            <div className="gallery__image gallery_image_height">
               <img src={photo1} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo2} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo3} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo4} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image gallery_image_height">
               <img src={photo5} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo6} alt="photo" className="gallery__img" />
               <div className="gallery__image_hover">
                  <span className="gallery__image_count">+196</span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Gallery;