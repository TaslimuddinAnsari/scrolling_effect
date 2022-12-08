import React from "react";
import style from "./Demo3.module.css";
import { getMoreStories } from "../../api/more";
import MoreStory from "../moreStory/MoreStory";
import Navbar from "../../component/navbar/Navbar";
import icon from "../../assets/image/science.png";
import Image from "next/image";
import topImage from "../../assets/image/img1.png";


const Demo3 = () => {
  const moreStory = getMoreStories();

  return (
    <div className={style.main_div}>
      <Navbar />
      <div className={style.full_story_heading}>
        <div className={style.full_story_text}>Full Story</div>
      </div>
      <div className={style.top_content}>
        <div className={style.image_section}>
          <Image
            src={topImage}
            className={style.top_img}
          />
        </div>
        <div className={style.card_div}>
          <div className={style.card_title}>
            "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For Bharat
            Jodo Yatra
          </div>
          <div className={style.card_date_writer}>
            <div className={style.writer_text}>By Writer</div>
            <div className={style.date_text}>Nov 02, 2022</div>
          </div>
          <div className={style.news_details}>
            Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after a boy gave
            his piggy bank to him during the Bharat Jodo Yatra in Madhya
            Pradesh. Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after Congress
            leader Rahul.are values inculcated during childhood after Congress
            leader Rahul. Congress leader Rahul Gandhi on Sunday said sacrifice
            and selflessness are values inculcated during childhood after a boy
            gave his piggy bank to him during the Bharat Jodo Yatra in Madhya
            Pradesh. Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after Congress
            leader Rahul.are values inculcated during childhood after Congress
            leader Rahul.
          </div>
          <div className={style.card_source}>
            <div className={style.card_source_text}>View full article at</div>
            <div className={style.card_source_link}>
              <a href="">NDTV</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.more_stories_heading}>
        <div className={style.icon_section}>
          <Image src={icon} alt="icon" className={style.icon} />
        </div>
        <div className={style.more_stories_text}>More from science</div>
      </div>
      <MoreStory stories={moreStory} />
    </div>
  );
};

export default Demo3;
