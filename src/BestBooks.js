import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  getBooks = async () => {
    const res = await axios.get('http://localhost:3001/books');
    this.setState({ books: res.data });
    console.log(this.state);
  }
  componentDidMount() {
    console.log("inside the componentDidMount");
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <><p>Book Carousel coming soon</p>
            <Carousel fade>
              {this.state.books.map((item, index) => {
                return (
                  <>
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt={item.title}
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item></>
                )
              })}
            </Carousel>
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
