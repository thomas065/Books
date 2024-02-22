import './App.css';
import BookList from './components/book/BookList';
import Header from './components/header/Header';

function App() {
    return (
        <div className='container-xl py-3'>
            <Header />
            <BookList />
        </div>
    );
}

export default App;
