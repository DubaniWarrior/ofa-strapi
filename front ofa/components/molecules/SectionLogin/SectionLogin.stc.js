import Styled from 'styled-components';

const SectionLoginStc=Styled.section`
    position: relative;
    padding-top: 100px !important;
    padding-bottom: 100px!important;
    h5{
        font-size: 30px;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 18px;
    }

   label {
            display: block;
            font-weight: 700;
            font-size: 16px;
            float: none;
            line-height: 1.3;
            margin: 0 0 4px 0;
            padding: 0;
        }

        input
        {
            border-radius: 0px;
            height: 60px;
        }
        button
        {
            background: #ccc;
            border-radius: 0px;
            padding: 10px 35px;
        }
        .sidebar-widget-menu li
        {
            list-style:none;
        }
        .sidebar-widget-menu
        {
            margin-top:100px;
        }
        .sidebar-widget-menu li a {
            position: relative;
            display: block;
            padding: 16px 40px;
            border: 1px solid #eee;
            text-decoration:none;
            &:hover{
                background: #54ae96;
            }
        }
        
`;
export default SectionLoginStc;