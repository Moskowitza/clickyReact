import React, { Component } from "react";
import LostCard from "./components/LostCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the Lost Charaters json array
  state = {
    cards
  };

  // removeCard = id => {
  //   // Filter this.state.cards for LostCharacters with an id not equal to the id being removed
  //   const cards = this.state.cards.filter(card => card.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ cards });
  // };


  //Immutability: re assign the position of each card
  shuffleCard = i => {
    const cards = this.state.cards.reverse();
    cards[i] = i;
    this.setState({ cards: cards });
  }

// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title>Cards List</Title>
      {this.state.cards.map(card => (
        <LostCard
          shuffleCard={this.shuffleCard}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
