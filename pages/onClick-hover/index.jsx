import React, {useEffect} from "react";

const index = () => {

  useEffect(() => {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var scrollArea = 1000 - windowHeight;
    // var image = document.getElementsByClassName("ele_image")[0];
    var card = document.getElementsByClassName("card_ele")[0];

    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || window.scrollTop;
      var scrollPercent = scrollTop / scrollArea || 0;

      
      // image.style.margin = scrollPercent * window.innerWidth + "px";
      card.style.top = 574 - scrollPercent * window.innerWidth * 0.001 + "px";
    });
  }, [])


  return (
    <div className="main">
      <div className="block_ele">
        <div className="ele_image">
          <img
            src="https://im.rediff.com/sports/2022/nov/29ron1.jpg?w=670&h=900"
            alt=""
            className="image"
          />
        </div>
        <div className="card_ele">
          <div className="card_title">
            "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For Bharat
            Jodo Yatra
          </div>
          <div className="news_details">
            Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after a boy gave
            his piggy bank to him during the Bharat Jodo Yatra in Madhya
            Pradesh. Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after Congress
            leader Rahul Gandhi on Sunday said sacrifice and selflessness are
            values inculcated during childhood after Congress leader Rahul
            Gandhi on Sunday said sacrifice and selflessness are values
            inculcated during childhood after Congress leader Rahul Gandhi on
            Sunday said sacrifice and selflessness are values inculcated during
            childhood after
          </div>
        </div>
      </div>

    </div>
  );
};

export default index;
