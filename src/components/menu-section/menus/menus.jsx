import Menu from "../menu/menu";
import {home,clipboard,massage,inbox,analytic,news,setting} from "../../../assets/icons";
import "./menus.scss";

const menus = [
  { title: "Dashboard", icon: home,path: "/"},
  { title: "Orders", icon: clipboard,collapse: true,  path: "/orders" },
  { title: "Schedules", icon: inbox,  path: "/schedules" },
  { title: "Messages", icon: massage,  path: "/messages" },
  { title: "Inbox", icon: inbox,collapse: true, path: "/inbox" },
  { title: "Analytics", icon: analytic, path: "/analytics" },
  { title: "News", icon: news,collapse: true, path: "/news" },
  { title: "Settings", icon: setting,path: "/settings" },
];


const Menus = ({ onSelect, collapsed, activeIdx }) => {
  return (
    <div className="menus">
      {menus.map((menu, idx) => (
        <Menu
          isActive={activeIdx === idx}
          key={menu.title}
          collapsed={collapsed}
          onSelect={() => onSelect(menu.title, idx)}
          {...menu}
        />
      ))}
    </div>
  );
};

export default Menus;

