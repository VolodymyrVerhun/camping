import style from "./CampList.module.css";
import Camp from "../../components/Camp/Camp";
import Button from "../Button/Button";
import { useState } from "react";
export default function CampList({ items }) {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };
  return (
    <div>
      <ul className={style.camp_list}>
        {items.slice(0, visibleItems).map((item) => (
          <Camp key={item._id} item={item} />
        ))}
      </ul>
      {visibleItems < items.length && (
        <Button
          style={{
            backgroundColor: "white",
            padding: "16px 32px",
            border: `1px solid grey`,
            marginLeft: "420px",
          }}
          onClick={loadMore}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
