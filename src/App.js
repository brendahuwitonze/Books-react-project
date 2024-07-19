
import Book from "./Book"
import MasteringReact from './mastering react.svg';
import PracticalReact from './practical react.svg';
import ReactInAction from './react in action.svg';
import './style.css';

export default function App(){
    return (
        <>
        <main className="mainbooks">
            <h1>Favorite Books</h1>
            <div className="book-list">
            <Book 
            title ="Mastering React" 
            author="Anthony Pham"
            cover ={MasteringReact}
            />
            <Book 
            title= "practical React" 
            author="Alex Johnson"
            cover={PracticalReact}
            />
            <Book 
            title="React in Action"
             author="Bob Climo"
             cover={ReactInAction}
             />
            </div>
            </main>
        </>
    )
}
