import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import BookList from './BookList';
import BookListContainer from './BookListContainer';


function App() {

  return (
    <div className="App">
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      
      <BookListContainer/>
    </div>
  );
}



/// REFACTORED VERSION AFTER INITIAL TEST

// function App() {
//   const books = [{name: 'Refactoring'}, {name: 'Domain-driven design'}];
//   // SECOND REFACTOR --> BookList
//   // const renderBooks = (books) => {
//   //   return <div data-test = 'book-list'>
//   //     {
//   //           books.map(book => (<div className='book-item'>
//   //             <h2 className='title'>{book.name}</h2>
//   //           </div>))
//   //         } 
//   //   </div>
//   // }

//   return (
//     <div className="App">
//       <Typography variant='h2' component='h2' data-test='heading'>
//         Bookish
//       </Typography>
//       {/*
//         // FIRST REFACTOR
//       <div data-test='book-list'>
//           {
//             books.map(book => (<div className='book-item'>
//               <h2 className='title'>{book.name}</h2>
//             </div>))
//           } 
//       </div> */}
//       <BookList books={books}/>
//     </div>
//   );
// }

export default App;
