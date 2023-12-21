import Education from '../components/education/Education';
import Header from '../components/header/Header';
import News from '../components/news/News';
import Person from '../components/person/Person';
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
            <Person />
            <News />
            <Education />
         </main>
      </>
   );
}

export default Home;
