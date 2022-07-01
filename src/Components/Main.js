import { useState } from 'react'
import './style.css'
import Card from './Card'
import axios from 'axios'
const Main = () => {
    const API_KEY = require('./pass.json').API_KEY;
    const [ search, setSearch ] = useState('');
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === 'Enter') {
            const Search = async () => {
                try {
                    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
                    setData(res.data.items);
                }
                catch (err) {
                    console.log(err)
                }
            }
            Search();
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>“I solemnly swear I am up to no good."</h1>
                </div>
                <div className="row2">
                    <h1>Find Your Book</h1>
                    <div className="search">
                        <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Card book={ bookData } />
            </div>
        </>
    );
}

export default Main;