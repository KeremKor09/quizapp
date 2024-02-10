import React from "react";

interface ListProps {
  texts: string[];
}

const List: React.FC<ListProps> = ({ texts }) => {
  return (
    <ul className="text-center mb-5">
      {texts.map((child, index) => (
        <li className="text-20 font-semibold text-2xl m-5" key={index}>
          &#x2022; {child}
        </li>
      ))}
    </ul>
  );
};

export default List;
