import MenuList from "./menu-list";
import { useState } from "react";
import "./style.css";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggle(itemId) {
    setDisplayChildren({
      ...displayChildren,
      [itemId]: !displayChildren[itemId],
    });
  }

  return (
    <li>
      <div className="menu-container">
      <p>{item.label}</p>
      {item.children && item.children.length ? (
        <span className="plus-minus" onClick={() => handleToggle(item.id)}>
          {displayChildren[item.id] ? "-" : "+"}
        </span>
      ) : null}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.id] ? (
        <MenuList list={item.children} />
      ) : null}
      </div>
    </li>
  );
}
