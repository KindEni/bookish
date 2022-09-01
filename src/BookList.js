const BookList = ({ books, loading, error }) => {

  return <div data-test='book-list'>
    
    {loading || error ? (<span>{error || 'Loading...'}</span>) :
      (books.map(book => (<div className='book-item'>
        <h2 className='title'>{book.name}</h2>
      </div>))
      )}
  </div>
}

export default BookList;

