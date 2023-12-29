import './fonts.css';
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
function App() {
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
          {/* <Home /> */}
          {/* <Library /> */}
          {/* <Book /> */}
          <PagePerson />
        </main>
        <Email />
        <Footer />
      </div>
    </BooksContext.Provider>
  );
}

export default App;
