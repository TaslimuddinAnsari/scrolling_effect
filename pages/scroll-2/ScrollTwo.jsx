import React from "react";
import css from "./ScrollTwo.module.css";
import { getMoreStories } from "../../api/more";
import MoreStory from "../moreStory/MoreStory";
import Navbar from "../../component/navbar/Navbar";

const ScrollTwo = () => {
  const moreStory = getMoreStories();
  console.log(moreStory)
  return (
    <div className={css.main}>
      <Navbar />
      <div className={css.scroll_2}>
        <div className={css.block_ele}>
          <div className={css.ele_image_1}>
            <img
              src="https://im.rediff.com/sports/2022/nov/29ron1.jpg?w=670&h=900"
              alt=""
              className={css.image}
            />
          </div>
          <div className={css.card_ele}>
            <div className={css.card_title}>
              "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For
              Bharat Jodo Yatra
            </div>
            <div className={css.card_date_writer}>
              <div className={css.writer_text}>By Writer</div>
              <div className={css.date_text}>Nov 02, 2022</div>
            </div>
            <div className={css.news_details}>
              Congress leader Rahul Gandhi on Sunday said sacrifice and
              selflessness are values inculcated during childhood after a boy
              gave his piggy bank to him during the Bharat Jodo Yatra in Madhya
              Pradesh. Congress on Sunday said sacrifice and selflessness are
              values inculcated during childhood after Congress leader Rahul
              Gandhi on Sunday said sacrifice and selflessness are values
              inculcated during childhood after Congress leader Rahul Gandhi on
              Sunday said sacrifice and selflessness are values inculcated
              during childhood after
            </div>
            <div className={css.card_source}>
              <div className={css.card_source_text}>View full article at</div>
              <div className={css.card_source_link}>
                <a href="">NDTV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.more_stories_heading}>
        <div className={css.more_stories_text}>More from Science</div>
      </div>

        <MoreStory stories={moreStory} />

    </div>
  );
};

export default ScrollTwo;