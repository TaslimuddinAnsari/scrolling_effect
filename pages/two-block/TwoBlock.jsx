import React from 'react';
import css from './TwoBlock.module.css';
import { getMoreStories } from "../../api/more";
import Image from "next/image";
import Navbar from "../../component/navbar/Navbar";
import MoreStory from '../moreStory/MoreStory';
import icon from "../../assets/image/science.png";
import topImage from "../../assets/image/img1.png";


const TwoBlock = () => {
    const moreStory = getMoreStories();

    return (
        <div className={css.main_block}>
                <Navbar />

            <div className={css.top_block}>
                {/* <Navbar /> */}
                <div className={css.full_story_heading}>
                    <div className={css.full_story_text}>Full Story</div>
                </div>
                <div className={css.image_section}>
                    <Image
                        src={topImage} alt="top-image"
                        className={css.top_img}
                    />
                </div>
            </div>

            <div className={css.bottom_block}>
                <div className={css.card_block}>
                    <div className={css.card_title}>
                        "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For Bharat
                        Jodo Yatra
                    </div>
                    <div className={css.card_date_writer}>
                        <div className={css.writer_text}>By Writer</div>
                        <div className={css.date_text}>Nov 02, 2022</div>
                    </div>
                    <div className={css.news_details}>
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
                    <div className={css.card_source}>
                        <div className={css.card_source_text}>View full article at</div>
                        <div className={css.card_source_link}>
                            <a href="">NDTV</a>
                        </div>
                    </div>
                </div>
                <div className={css.more_stories_heading}>
                    <div className={css.icon_section}>
                        <Image src={icon} alt="icon" className={css.icon} />
                    </div>
                    <div className={css.more_stories_text}>More from science</div>
                </div>
                <MoreStory stories={moreStory} />
            </div>
        </div>
    )
}

export default TwoBlock
