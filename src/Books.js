import React, {Component} from 'react';
import './App.css';

class Books extends Component {

     state = {
          books: []
     }

     componentWillMount() {
          fetch('./books.json')
               .then(response => response.json())
               .then(data => {
                    const booksArray = [];
                    data.books.forEach( index => {
                         booksArray.push( index.book.book_cover.src );
                    });
                    this.setState({ books: booksArray });
               });

          }


     render() {
          return (
               <div>
                    <div id="grid">
                         {
                              this.state.books.map( function (currentElement) {

                                   return (
                                        <div id="img-container-div">
                                             <img src={currentElement} alt="BookCovers"></img>
                                        </div>
                                   )

                         })}
                    </div>
               </div>
          );
     }
}

export default Books;
