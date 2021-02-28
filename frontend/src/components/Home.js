import React from "react";

function Home() {
  return (
    <>
      <center>
        <div className="my-center" style={{ border: "1px solid black" }}>
          <div className="polaroid rotate_right">
            <img
              src="https://www.vippng.com/png/detail/24-242976_green-smiley-face-png-green-happy-face-emoji.png"
              alt="Green Smiley"
              width="260"
              height="213"
            />
            <p className="caption">I'm Happy you could come by.</p>
          </div>

          <div className="polaroid rotate_left">
            <img
              src="https://cdn.statically.io/img/www.pngitem.com/pimgs/m/106-1061710_winking-emoji-png-wink-smiley-transparent-png.png"
              alt="Yellow Smiley"
              width="260"
              height="213"
            />
            <p className="caption">If you have not so, please login.</p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Home;
