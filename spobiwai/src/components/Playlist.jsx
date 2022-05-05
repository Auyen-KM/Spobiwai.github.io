import React from "react";
import Database from "../data/Database.json";
import s from "./Playlist.module.css";
export default function Playlist() {
  return (
    <div className={s.Playlist}>
      {Database.map (data => {
        return(
          <div key={data.id}>
            <h2 className={s.h2}>{data.title}</h2>
              <ul className={s.ul}>
                <li className={s.li}>{data.track1}</li>
                <li className={s.li}>{data.track2}</li>
                <li className={s.li}>{data.track3}</li>
                <li className={s.li}>{data.track4}</li>
                <li className={s.li}>{data.track5}</li>
                <li className={s.li}>The text above is written with Json </li>
              </ul>
          </div>
        )
      })}

    </div>
  );
}

// import React, { Component } from "react";

// export default class Playlist extends Component {
//   render() {
//     return (
//       <div className={s.Playlist}>
//         <h2 className={s.h2}>My playlist </h2>
//         <ul className={s.ul}>
//           <li className={s.li}>ᐅ Unknown Artist - First track</li>
//           <li className={s.li}>ᐅ Unknown Artist - Second track</li>
//           <li className={s.li}>ᐅ Unknown Artist - Third track</li>
//           <li className={s.li}>ᐅ Unknown Artist - Forth track</li>
//           <li className={s.li}>ᐅ Unknown Artist - Fifth track</li>
//         </ul>

//         {/* {database} */}
//       </div>
//     );
//   }
// }
