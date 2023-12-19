import Header from '../components/header/Header';
import Popular from '../components/popular/Popular';

function Home() {
   return (
      <>
         <Header />
         <main className="main">
            <Popular />
         </main>
      </>
   );
}

export default Home;
