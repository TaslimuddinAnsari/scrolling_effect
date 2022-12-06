
import { getMoreStories } from "../../api/more";
import css from "./Demo4.module.css";
import Story from "../story/Story";
import Navbar from "../../component/navbar/Navbar";
import icon from "../../assets/image/science.png";
import Image from "next/image";
import topImage from "../../assets/image/img1.png";



const Demo4 = () => {
    const moreStory = getMoreStories();

    return (
        <div className={css.main_section}>
            <Navbar />
            <div className={css.top_image}>
                <Image
                    src={topImage}
                    alt="top-image"
                    className={css.image}
                />
            </div>

            <div className={css.sticky}>
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
                        leader Rahul. bank to him during the Bharat Jodo Yatra in Madhya
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

            <Story stories={moreStory} />
        </div>
    );
};

export default Demo4;
