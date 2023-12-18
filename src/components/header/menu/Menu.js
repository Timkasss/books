import './menu.scss'

function Menu() {
   return (
      <nav className="menu">
         <ul className="menu__list">
            <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Головна</a>
            </li>
            <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Бібліотека</a>
            </li>
            <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Автори</a>
            </li>
            <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Статті</a>
            </li>
            <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Пошук</a>
            </li>
         </ul>
      </nav>
   )
}

export default Menu;