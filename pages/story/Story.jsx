import Image from "next/image";
import icon from "../../assets/image/science.png";
import style from './Story.module.css';

const Story = ({ stories }) => {
    return (
        <div className={style.more_stories}>
            {stories.map((ele, index) => (
                <div className={style.card_block} key={index}>
                    <div className={style.card_image}>
                        <Image src={ele.Image} alt="top-image"
                            className={style.image} />
                    </div>

                    <div className={style.card_body}>
                        <div className={style.body_heading}>{ele.Title}</div>
                        <div className={style.body_text}>
                            <div className={style.time_text}>{ele.DateAndTime}</div>
                            <div className={style.author_text}>{ele.Author}</div>
                        </div>
                    </div>
                    <div className={style.card_icon}>
                        <Image
                            src={icon}
                            alt="icons"
                            layout="fill"
                            className={style.icon}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Story
