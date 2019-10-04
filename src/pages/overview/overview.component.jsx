import React, { Component } from 'react';

import axios from '../../axios.natours';
import Card from '../../components/card/card.component';

class Overview extends Component {
  state = {
    title: 'All tours',
    tours: []
  };

  async componentDidMount() {
    document.title = `Natours | ${this.state.title}`;
    //Get tours data
    try {
      const tours = await axios.get('tours');
      // console.log(tours.data.data.doc);
      if (tours.data.status === 'success') this.setState({ tours: tours.data.data.doc });
    } catch (err) {
      console.log('💥', err);
    }
  }

  render() {
    return (
      <main className="main">
        <div className="cards-container">
          {this.state.tours.map(tour => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    );
  }
}

export default Overview;
