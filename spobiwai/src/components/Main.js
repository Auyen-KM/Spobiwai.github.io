import React, { Component } from "react";

import "./Main.css";
function Main() {
  return (
    <div className="Main">
      <div className="genre">
        <h1>Electro</h1>
        <Square name="Dubstep" subgenre="dubstep" />
        <Square name="Bass" subgenre="bass" />
        <Square name="Techno" subgenre="techno" />
        <Square name="Garage" subgenre="garage" />
        <Square name="House" subgenre="house" />
        <Square name="Trance" subgenre="trance" />
      </div>
      <div className="genre">
        <h1>Rock</h1>
        <Square name="Rock'n'roll" subgenre="rocknroll" />
        <Square name="Rap Rock" subgenre="rapRock" />
        <Square name="Postpunk" subgenre="postpunk" />
        <Square name="Armenian rock" subgenre="armenianRock" />
        <Square name="Garage Rock" subgenre="garageRock" />
        <Square name="Hard Rock" subgenre="hardRock" />
      </div>
      <div className="genre">
        <h1>Pop</h1>
        <Square name="Dance pop" subgenre="dancePop" />
        <Square name="Indie pop" subgenre="indiePop" />
        <Square name="Pop Rap" subgenre="popRap" />
        <Square name="Hyperpop" subgenre="hyperPop" />
        <Square name="Synth pop" subgenre="synthPop" />
        <Square name="Pop punk" subgenre="popPunk" />
      </div>

      <div className="genre">
        <h1>Jazz</h1>
        <Square name="Jazz funk" subgenre="jazzFunk" />
        <Square name="Bebop" subgenre="bebop" />
        <Square name="Blues" subgenre="blues" />
        <Square name="Swing" subgenre="swing" />
        <Square name="Funk" subgenre="funk" />
        <Square name="Dark jazz" subgenre="darkJazz" />
      </div>

      <div className="genre">
        <h1>Rap</h1>
        <Square name="Old Skool Rap" subgenre="oldSkoolRap" />
        <Square name="Gangsta rap" subgenre="gangstaRap" />
        <Square name="Jazz rap" subgenre="jazzRap" />
        <Square name="Drill" subgenre="drill" />
        <Square name="Trap" subgenre="trap" />
        <Square name="Grime" subgenre="grime" />
      </div>
    </div>
  );
}

function Square(prop) {
  return (
    <div className="square" id={prop.subgenre}>
      <p>{prop.name}</p>
    </div>
  );
}

export default Main;
