import './fonts.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import { useState, useEffect } from 'react';

import { BooksContext } from './components/context';
import Book from './pages/Book';
import Header from './components/header/Header';
import Email from './components/email/Email';
import Footer from './components/footer/Footer';
import PagePerson from './pages/PagePerson';

import { url, url2 } from './api.js';
import Personal from './pages/Personal.js';
import PageNews from './pages/PageNews.js';
import Article from './pages/Article.js';
import Feedback from './pages/Feedback.js';
import Error from './pages/Error.js';


function App() {
  let path = useLocation()
  let finishPath = path.pathname;

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [finishPath])
  const [dataBooks, setDataBooks] = useState([])
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

  return (
    <BooksContext.Provider value={{ dataBooks, setDataBooks }}>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:userId" element={<Book />} />
            <Route path="/pageperson/:id" element={<PagePerson />} />
            <Route path="/mypage/:id" element={<Personal />} />
            <Route path="/news" element={<PageNews />} />
            <Route path="/news/:id" element={<Article />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <div className="top" onClick={scrollTop}></div>
        </main>
        <Email />
        <Footer />
      </div>
    </BooksContext.Provider>
  );
}

export default App;
