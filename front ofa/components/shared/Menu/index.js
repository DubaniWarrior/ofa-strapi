import {
    NavLink,
} from 'reactstrap'
import MenuStc from './Menu.stc';
import Link from "next/link"
const Menu=(props)=>{
    return (
    <MenuStc>
        <Link href={props.lien}>{props.texte}</Link>
    </MenuStc>
    )
}
export default Menu;