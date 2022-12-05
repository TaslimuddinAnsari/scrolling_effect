import css from './Navbar.module.css';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className={css.navbar_component}>
      <div className={css.navbar_element}>
        <div className={css.logo_image_text}>

          <div className={css.logo}>
            <Image src={require('../../assets/image/logo.png')}
              alt='logo' className={css.logo_image} />
          </div>

          <div className={css.logo_text}>ABC News</div>
        </div>
        <div className={css.search_bar}>
          <input className={css.search_text} type="text" placeholder="Search for news..." />
          <div className={css.search_icon}>
            <Image src={require('../../assets/image/search-icon.png')}
              alt='search-icon' className={css.search_image} />
          </div>
        </div>
        <div className={css.profile}>
          <div className={css.profile_icon}>
            <Image src={require('../../assets/image/profile-icon.png')}
              alt='search-icon' className={css.profile_image} />
          </div>
          <div className={css.k_1}>K-1</div>
          <div className={css.dropdown}>
            <Image src={require('../../assets/image/drop-down-icon.png')}
              alt='search-icon' className={css.dropdown_image} />
          </div>
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
