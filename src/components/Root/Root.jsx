
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet> 
        <Footer></Footer>
        </div>
    );
};

export default Root;