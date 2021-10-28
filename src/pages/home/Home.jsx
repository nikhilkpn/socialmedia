import PersonIcon from '@mui/icons-material/Person';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Topbar from '../../components/topbar/Topbar';
import './home.css'

function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}

export default Home
