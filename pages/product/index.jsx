import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Categories from "./Categories";


const Products = () => {
  const [getData, setgetData] = useState([]);
  const [len, setLen] = useState(0);
  const [arrayOfPages, setArrayOfPages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("http://localhost:2410/get-data");
      let { news, arrayOfPage } = resp.data;
      setgetData(news);
      setArrayOfPages(arrayOfPage);
      setLen(arrayOfPage.length);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <Link href="/">home page</Link>
      <div> lenght of Array {len}</div>
      <div className="block_ele">
        <div className="ele_image">
          <img
            src="https://im.rediff.com/sports/2022/nov/29ron1.jpg?w=670&h=900"
            alt=""
            className="image"
          />
        </div>
        <div className="card">
          <div className="card_title">
            "Treasure Of Love": Boy Offers Piggy Bank To Rahul Gandhi For Bharat
            Jodo Yatra
          </div>
          <div id="news_details">
            Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after a boy gave
            his piggy bank to him during the Bharat Jodo Yatra in Madhya
            Pradesh. Congress leader Rahul Gandhi on Sunday said sacrifice and
            selflessness are values inculcated during childhood after Congress
            leader Rahul Gandhi on Sunday said sacrifice and selflessness are
            values.
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
