import Link from "next/link";

import React, {useEffect} from "react";
const Home = () => {

  useEffect(() => {
    var container = document.getElementById("container");
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var scrollArea = 1000 - windowHeight;
    var square1 = document.getElementsByClassName("square")[0];
    var square2 = document.getElementsByClassName("square")[1];

    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || window.scrollTop;
      var scrollPercent = scrollTop / scrollArea || 0;

      square1.style.left = scrollPercent * window.innerWidth + "px";
      square2.style.left = 800 - scrollPercent * window.innerWidth * 0.6 + "px";
    });
  }, [])

  return (
    <div>
      <h2>Hello World!</h2>
      {/* <Link href="/product">product page</Link> */}

      <h5>
        {/* <Link href="/scroll-1">Scroll-type-1</Link> */}
      </h5>
      <h3><Link href={'/demo-3/Demo3'}>Normal</Link></h3>
      <h3>
        <Link href='/scroll-2/ScrollTwo' >Image-fixed </Link>
      </h3>
      {/* <h3>
        <Link href='/scroll-3/ScrollThree' >scroll type-3 </Link>
      </h3> */}
      <h3><Link href={'/parallax/Parallax'}>Parallax-design</Link></h3>
      <h3><Link href={'/demo-4/Demo4'}>Card-Sticky</Link></h3>
      <h3><Link href={'/demo-5/Demo5'}>Image-and-Card-Sticky</Link></h3>
      <h3><Link href={'/two-block/TwoBlock'}>Two-Block</Link></h3>
      <h3><Link href={'/parallax-exam/ParallaxExample'}>Parallax-test</Link></h3>
      <h3><Link href={'/parallax-exam/Example1'}>Parallax-Example2</Link></h3>
      <h3><Link href={'/onClick-hover/OnClickHover'}>onClick</Link></h3>
      {/* <h3><Link href={'/onClick-hover'}>onClick</Link></h3> */}
      <div className="container" id="container">
        <div className="square square-1"></div>
        <div className="square square-2"></div>
      </div>
    </div>
  );
};

export default Home;
