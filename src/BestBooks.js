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


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <Carousel fade>
              {this.state.books.map((item, idx) => {
                return (
                  <Carousel.Item key={idx}>
                    <img 
                     className="d-block w-100"
                     src="https://th.bing.com/th/id/OIP.wi7Kjr5T34waNdcggcn_dQHaE7?w=280&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                      alt={item.title}
                      width={"300"} height={"300"}
                    />
                    <Carousel.Caption >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
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
