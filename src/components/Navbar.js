import {useState} from "react";
import { MenuItems } from "./MenuItems";

const Navbar = () => {

return (
    <div>    
        <h1>Plants Gone Wild</h1>
        <ul>
        {MenuItems.map((item, index) => {
        return (
            <li key={index}>
            <a className={item.cName} href={item.url}>
                {item.Title}
            </a>
            </li>
        );
        })}
        </ul>
    </div>

  )

}

export default Navbar;