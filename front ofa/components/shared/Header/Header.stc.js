import Styled from 'styled-components';
import {Navbar} from 'reactstrap';

const HeaderStc=Styled(Navbar)`
    z-index: 9999;
    min-height: 80px;
    float: left;
    width: 100%;
    background:#fff;
    

    .part1
    {
        font-size:30px;
        font-weight:600;
    }
    .part2
    {
        font-size:30px;
        font-weight:600;
    }
    .mr-auto, .mx-auto {
        margin: auto !important;
        margin-right: 0px !important;
    }

`;
export default HeaderStc;