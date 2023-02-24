import Navbar from '../components/Navbar';
import BookList from '../components/BookList';

const Home = () => {
    return (
      <>
        <Navbar />
        <div className="wrapper">
         <BookList /> 
        </div>
      </>
    );
  };
  export default Home;