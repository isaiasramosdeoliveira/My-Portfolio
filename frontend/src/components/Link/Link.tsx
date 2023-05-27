import React from "react";
import { Link as Button } from "react-router-dom";
import {useLocation} from "react-router-dom";

interface ILink {
  children: React.ReactNode;
  to: string;
  name?: string;
}

const Link = ({children, to, name}: ILink) => {
  const {pathname} = useLocation()
  return (
    <li className={to === pathname ? "active" : ""}>
      <Button to={to}>
        {children}
        <span className="describe">{name}</span>
      </Button>
    </li>
  );
};

export default Link;
