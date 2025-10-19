import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import AddNew from '../component/AddNew';

const AddNewCampaign = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <AddNew></AddNew>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddNewCampaign;