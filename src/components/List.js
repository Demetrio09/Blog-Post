import React from "react";
import { useTodoContext } from "../utils/GlobalState";

const List = () => {
  const [items, dispatch] = useTodoContext();

  return (
    <ul className='list-group'>
      {items.map((item, id) => (
        <li className='list-group-item' key={item.id}>
          {item.name}{" "}
          <button
            className='btn btn-danger ml-5'
            onClick={() => dispatch({ type: "remove", id: item.id })}
          >
            X Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
