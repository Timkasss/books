import Header from '../components/header/Header';
import Popular from '../components/popular/Popular';
import Video from '../components/video/Video';
import Whatread from '../components/whatread/Whatread';

function Home() {
   return (
      <>
         <Header />
         <main className="main">
            <Popular />
            <Video />
            <Whatread />
         </main>
      </>
   );
}

export default Home;
