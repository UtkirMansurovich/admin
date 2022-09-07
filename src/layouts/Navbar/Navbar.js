import { NavbarSection } from "./Navbar.styled";
import Search from '../../components/Search/Search';
import Alert from "../../components/AlertEmail/Alert";
import Email from "../../components/AlertEmail/Email";
import User from "../../components/User/User";

const Navbar = () => {
    return (
        <NavbarSection>
            <Search/>
            <Alert/>
            <Email/>
            <User/>
        </NavbarSection>
    )
}

export default Navbar;