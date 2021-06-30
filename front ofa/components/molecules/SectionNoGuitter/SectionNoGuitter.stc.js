import Styled from 'styled-components';

const SectionNoGuitterStc=Styled.div`
    
    .icon-box {
        position: relative;
        display: block;
        padding: 40px 20px 30px;
        -webkit-transition: all .25s cubic-bezier(.645,.045,.355,1);
        -o-transition: all .25s cubic-bezier(.645,.045,.355,1);
        transition: all .25s cubic-bezier(.645,.045,.355,1);
        border-radius: 5px;
        z-index: 99;
        text-align:center;
    }
    .icon-box .icon {
        margin-bottom: 24px;
    }

    .icon-box .content .title {
        font-size: 24px;
        line-height: 1.5;
        margin: 0;
        color: #3f3a64;
    }

    .icon-box .content .title {
        font-size: 24px;
        line-height: 1.5;
        margin: 0;
        color: #3f3a64;
        font-weight:700 !important;
    }
    .icon-box .content .desc {
        margin-top: 10px;
    }
    .icon-box .content .desc p {
        line-height: 1.6;
        color: #696969;
    }
    p:last-child {
        margin-bottom: 0;
    }
    a
    {
        text-decoration:none;
    }
    .icon-box .content .link {
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 34px;
        padding: 5px 0;
        color: #8c89a2;
    }
`;
export default SectionNoGuitterStc;