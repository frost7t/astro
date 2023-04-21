import React from 'react'
import { FcRightDown } from "react-icons/fc";
export default function CardFaq({title,description,iconName,bgColorIcon}) {
    const icons = {
      FcRightDown: <FcRightDown />,
    };
  return (
    <div className="flex py-4">
      {icons[iconName] &&
        React.cloneElement(icons[iconName], {
          className: `${bgColorIcon} text-3xl`,
        })}
      <div >
        <p className="font-black pl-3 py-3 ">{title}</p>
        <p className="max-w-sm pl-3">{description}</p>
      </div>
    </div>
  );
}
