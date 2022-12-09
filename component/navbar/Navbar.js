import css from './Navbar.module.css';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className={css.navbar_component}>
      <div className={css.navbar_element}>
        <div className={css.logo_image_text}>
          <div className={css.logo_text}>News</div>
        </div>
        <div className={css.search_bar}>
          <input className={css.search_text} type="text" placeholder="Search for news..." />
          <div className={css.search_icon}>
            <Image src={require('../../assets/image/search-icon.png')}
              alt='search-icon' className={css.search_image} />
          </div>
        </div>
        <div className={css.profile}>
            <Image src={require('../../assets/image/profile_image.png')}
              alt='search-icon' className={css.profile_image} />
        </div>
      </div>
      <div className={css.search_block}>
        <div className={css.search_bar_sm}>
          <input className={css.search_text_sm} type="text"
            placeholder="Search for news..." />
          <div className={css.search_icon_sm}>
            <Image src={require('../../assets/image/search-icon.png')}
              alt='search-icon' className={css.search_image} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
