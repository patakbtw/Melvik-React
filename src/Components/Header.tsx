import "../styles/header.scss";
import { menuData } from "../assets/utilities";
import menuInterface from "../assets/utilities";

export default function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        {menuData.map((item: menuInterface, index: number) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
