import {NavItem} from 'reactstrap';
import Styled from 'styled-components';

const MenuSct=Styled(NavItem)`
        line-height: 1.375;
        display: block;
        padding: 29px 17px;
        padding-top: 30px !important;
        a
        {
            text-decoration:none;
            font-family: calibri;
            font-weight: 600;
            font-size: 19px;
        }
        & .nav-link
        {
            color: #404040 !important;
        }
`;
export default MenuSct;