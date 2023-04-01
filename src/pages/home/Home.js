import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './Home.css';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
          <Posts/>
          <Sidebar/>
      </div>
    </>
  )
}
