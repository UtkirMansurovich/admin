import { HomeContainer } from './Home.styled';
import Navbar from '../../layouts/Navbar/Navbar';
import Header from '../../layouts/Header/Header';
import SideBar from '../../layouts/SideBar/SideBar';
import Footer from '../../layouts/Footer/Footer';

const Home = () => {
    return (
        <HomeContainer>
            <Navbar/>
            <Header/>
            <SideBar/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home;