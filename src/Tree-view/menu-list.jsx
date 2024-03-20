import MenuItem from "./menu-item";
import "./style.css";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-container">
      {list.map((listItem) => (
        <MenuItem item={listItem} key={listItem.id} />
      ))}
    </ul>
  );
}
