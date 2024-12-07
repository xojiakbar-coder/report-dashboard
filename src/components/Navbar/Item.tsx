import { FC } from "react";
import navbar_items from "@/utils/navbar";
import { NavLink } from "react-router-dom";

const Item: FC = () => {
  return (
    <nav className="flex items-center gap-[20px]">
      <div className="flex items-center gap-[25px]">
        {navbar_items.map((item) => {
          const { id, title, path } = item;

          // Define classes
          const activeClass = "text-primary-btn";
          const defaultClass =
            "text-[14px] hover:text-white text-item-color font-grotesk cursor-pointer transition-all ease-out duration-[115ms] py-[6px] px-[9px] rounded-[4px] capitalize";

          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              {title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Item;