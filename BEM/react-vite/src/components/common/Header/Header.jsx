import { NavigationList } from "../../../constants/conNavigation";
import logoFull from '../../../assets/images/Header/logoFull.svg';
import './Header.scss';

const Header = () => {
  const forMapNavigationItem = (item, index) => {
    return (
      <li className={`header__menuItem ${index + 1 % 2 === 0 ? 'header__menuItem--even' : 'header__menuItem--odd'}`} key={item.id}>
        {item.title}
      </li>
    )
  };

  const child = NavigationList.map(forMapNavigationItem);
  return (
    <section className="header">
      <div
        className="header__wrapper"
      >
        <div className="header__area header__area--logo">
          <img src={logoFull} />
        </div>
        <div className="header__area  header__area--tool">
          <ul className="header__menuList">
            {child}
          </ul>
          <button className="btn">來去逛逛 →</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
