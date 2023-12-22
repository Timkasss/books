import Education from '../components/education/Education';
import Email from '../components/email/Email';
import Footer from '../components/footer/Footer';
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
            <Email />
            <Footer />
         </main>
      </>
   );
}

export default Home;
