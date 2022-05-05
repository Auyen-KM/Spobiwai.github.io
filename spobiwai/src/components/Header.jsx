import React, { Component, useState } from "react";
import "./Header.css";
import DatabasePic from "../data/DatabasePic.json";
import icon from "./icon.png";
import Playlist from "./Playlist";
function Header() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="Header">
      {DatabasePic.map (data => {
        return(
          <div key={data.id}>
              {/* <img id="icon" src={data.src} alt={data.alt}></img> */}
          </div>
        )
      })}
      <img id="icon" src={icon} alt="spobiwai"></img>
      <h1 className="spobiwai"> SPOBIWAI </h1>
      <ul className="ul">
        <li className="li">Home</li>
        <li className="li" onClick={() => setIsClicked(!isClicked)}>
          My playlist
        </li>
        {isClicked && <Playlist />}
        <li className="li">Premium</li>
        <li className="li">Search</li>
        <li className="li">Download</li>
        <li className="li">|</li>
        <li className="li">Sign in</li>
        <li className="li">Register</li>
      </ul>
    </div>
  );
}

export default Header;

// import React, { Component } from 'react'

// export default class Header extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { isClicked: false };
//   // }

//   render() {
//     // if (this.state.isClicked) {
//     //   return (
//     //     <div>
//     //       <Playlist />
//     //     </div>
//     //   );
    

//     // function isClick() {
//     //   this.setState({ isClicked: true });
//     // }

//     return (
//       <div className="Header">
//         <img id="icon" src={icon} alt="spobiwai"></img>
//         <h1 className="spobiwai"> SPOBIWAI </h1>
//         <ul className="ul">
//           <li className="li">Home</li>
//           <li className="li">My playlist</li>
//           {/* {isClicked && <Playlist />} */}
//           <li className="li">Premium</li>
//           <li className="li">Search</li>
//           <li className="li">Download</li>
//           <li className="li">|</li>
//           <li className="li">Sign in</li>
//           <li className="li">Register</li>
//         </ul>
//       </div>
//     );
//   }
// }


