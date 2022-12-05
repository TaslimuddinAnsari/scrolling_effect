import React from "react";
import MoreStory from "../moreStory/MoreStory";
import style from "./Animation.module.css";
import { getMoreStories } from "../../api/more";
import Navbar from "../../component/navbar/Navbar";

const Animation = () => {

  const moreStory = getMoreStories();

  return (
    <div className={style.Animation_container}>
      <Navbar />
      <div className={style.ele_image}></div>
      
      <div className={style.card_ele}>
        <div className={style.card_title}>
          "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For Bharat
          Jodo Yatra
        </div>
        <div className={style.card_date_writer}>
          <div className={style.writer_text}>By Writer</div>
          <div className={style.date_text}>Nov 02, 2022</div>
        </div>
        <div className={style.news_details}>
          Congress leader Rahul Gandhi on Sunday said sacrifice and selflessness
          are values inculcated during childhood after a boy gave his piggy bank
          to him during the Bharat Jodo Yatra in Madhya Pradesh. Congress leader
          Rahul Gandhi on Sunday said sacrifice and selflessness are values
          inculcated during childhood after Congress leader Rahul.are values
          inculcated during childhood after Congress leader Rahul. Congress
          leader Rahul Gandhi on Sunday said sacrifice and selflessness are
          values inculcated during childhood after a boy gave his piggy bank to
          him during the Bharat Jodo Yatra in Madhya Pradesh. Congress leader
          Rahul Gandhi on Sunday said sacrifice and selflessness are values
          inculcated during childhood after Congress leader Rahul.are values
          inculcated during childhood after Congress leader Rahul.
        </div>
        <div className={style.card_source}>
          <div className={style.card_source_text}>View full article at</div>
          <div className={style.card_source_link}>
            <a href="">NDTV</a>
          </div>
        </div>
      </div>
      <div className={style.more_stories_heading}>
        <div className={style.more_stories_text}>More from science</div>
      </div>
      <MoreStory stories={moreStory}/>
    </div>
  );
};

export default Animation;
