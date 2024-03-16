import React, { Component } from 'react';

class App extends Component {
  state = {
    personne: {
      fullName: "Fakhita Twita",
      bio: "Développeur Full Stack chez GoMyCode",
      imgSrc: "https://images.pexels.com/photos/18917241/pexels-photo-18917241/free-photo-of-young-woman-in-white-pollera-dress-and-a-colorful-headdress.jpeg?auto=compress&cs=tinysrgb&w=400",
      profession: "Développeur Web"
    },
    show: false,
    timer: 0,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Cacher' : 'Afficher'} le profil
        </button>
        {this.state.show && (
          <div>
            <h1>{this.state.personne.fullName}</h1>
            <p>{this.state.personne.bio}</p>
            <img src={this.state.personne.imgSrc} alt="Profil" />
            <p>{this.state.personne.profession}</p>
          </div>
        )}
        <p>Temps écoulé : {this.state.timer} secondes</p>
      </div>
    );
  }
}

export default App;
