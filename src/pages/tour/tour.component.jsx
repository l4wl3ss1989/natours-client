import React, { Component } from 'react';

// import axios from '../../axios.natours';

class Tour extends Component {
  state = {
    title: 'Tour',
    user: null,
    tour: 'The Forest Hiker'
  };

  async componentDidMount() {
    document.title = `Natours | ${this.state.title}`;
    // try {
    //   const res = await axios.post("/users/login", {
    //     email: "ayls@example.com",
    //     password: "test1234"
    //   });
    //   this.setState({ user: res.data.data.user });
    //   // console.log(user);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  render() {
    return (
      <main className="main">
        <h1>{this.state.tour}</h1>
      </main>
    );
  }
}

export default Tour;
