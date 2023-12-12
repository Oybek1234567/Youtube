import { NavLink } from "react-router-dom";
import { Icons } from "../assets/icons";
import { menubar } from "../constants/menuBars";
const Root = () => {
  return (
    <div className="root">
        <div className="root__menu">
            <div className="root__logo">
                <Icons.burger/>
                <Icons.logo />
            </div>
            <div className="root__list">
            {
                menubar.map(item => (
                        <NavLink to={item.path} key={item.id} className="root__link">
                            {item.icon} {item.title}
                        </NavLink>
                ))
            }
        </div>
        </div>
        
        <div className="root_main">
            <div className="root_header">
                header
            </div>
            <div className="root__pages">
                pages
            </div>
        </div>
    </div>
  )
}
export default Root