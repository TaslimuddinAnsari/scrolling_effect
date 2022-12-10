import React, {useEffect} from 'react';
import css from './OnClickHover.module.css';
import Navbar from '../../component/navbar/Navbar';
import Image from 'next/image';
import topImage from '../../assets/image/img1.png';
import icon from '../../assets/image/science.png';
import { getMoreStories } from "../../api/more";
import MoreStory from '../moreStory/MoreStory';


const OnClickHover = () => {
    const moreStory = getMoreStories();
    useEffect(() => {
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var scrollArea = 1000 - windowHeight;
        var card = document.getElementsByClassName("card_block")[0];
    
        window.addEventListener('scroll', function() {
          var scrollTop = window.pageYOffset || window.scrollTop;
          var scrollPercent = scrollTop / scrollArea || 0;
          card.style.margin = 136 - scrollPercent * window.innerWidth * 0.001 + "px";
        });
      }, [])

    return (
        <div className={css.main_section}>
            <Navbar />
            <div className={css.full_story_heading}>
                <div className={css.full_story_text}>Full Story</div>
            </div>
            <div className={css.news_details}>
                <div className={css.top_image}>
                    <Image src={topImage} alt='top-image'
                        className={css.image} />
                </div>

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

            </div>

            <div className={css.more_stories_heading}>
                <div className={css.icon_section}>
                    <Image src={icon} alt="icon" className={css.icon} />
                </div>
                <div className={css.more_stories_text}>More from science</div>
            </div>
            <MoreStory stories={moreStory} />

        </div>
    )
}

export default OnClickHover
