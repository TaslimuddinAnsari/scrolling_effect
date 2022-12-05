import React from "react";
import Link from "next/link";
import styles from "./Categories.module.css";
import Image from "next/image";

const Categories = ({ele,len}) => {
    console.log(len)
  const { img, titleType, title, text, time } = ele;
  return (
    <div className={styles.card}>
      <Image src={img} alt="image" className={styles.card_img_top} />
      <div className={styles.card_body}>
        <div className={styles.story_type}>
          <Link href={`categories/${titleType.toLowerCase()}`}>
            {titleType}
          </Link>
        </div>
        <div className={styles.story_title}>{title}</div>
        <div className={styles.story_text}>{text}</div>
        <div className={styles.publish_details}>
          <div className={styles.publish_date_or_time}>{time}</div>
          <div className={styles.publish_by}>By Writer | 4min read</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
