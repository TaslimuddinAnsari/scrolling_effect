import Navbar from "../../component/navbar/Navbar";
import css from "./Article.module.css";
import FullStory from "./fullStory/FullStory"
import icon from "../../assets/icons/science.png";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MoreStory from "./moreStory/MoreStory";

const Article = () => {
  const router = useRouter();
  const data = router.query;
  const { url, category } = data;
  const [newsStories, setNewsStories] = useState([]);
  const [articledata, setArticleData] = useState({})

  useEffect(() => {
    async function fetchtNews() {
      const resp = await axios.get(`http://localhost:2410/get-data/science`);
      let { news, arrayOfPage } = resp.data;
      setNewsStories(news);
    }
    fetchtNews();
  }, []);

  useEffect(() => {
    async function fetchURL() {
      const resp = await axios.get(
        `http://localhost:2410/get-url-data?url=${url}`
      );
      const {newsDetails,moreRelatedData,} = resp.data;
      setArticleData(newsDetails)
      setNewsStories(moreRelatedData);
    }
    fetchURL();
  }, []);
  return (
    <div className={css.conatiner}>
      <Navbar />

      <div className={css.full_story_heading}>
        <div className={css.full_story_text}>Full Story</div>
      </div>

      <FullStory articledata={articledata} />

      <div className={css.more_stories_heading}>
        <div className={css.icon_section}>
          <Image src={icon} alt="icon" className={css.icon} />
        </div>
        <div className={css.more_stories_text}>
          More from {category.charAt(0).toUpperCase()+category.slice(1)}
        </div>
      </div>

      <MoreStory stories={newsStories} />
      
    </div>
  );
};


export default Article;
