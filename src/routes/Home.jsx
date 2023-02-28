import AddForm from 'components/AddForm';
import Navbar from '../components/Navbar';
import BookList from '../components/BookList';

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <BookList />
        <AddForm />
      </div>
    </>
  );
}
export default Home;
