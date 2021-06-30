import Styled from 'styled-components';

const Section1AccueilStc=Styled.section`
    width:100%;
    height: 100vh;
    margin:0px;
    background-image: url('/img/bg-1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 820px;
    padding: 50px 0;

    .intro1-content .sub-title {
        font-weight: 700;
        line-height: 2;
        display: block;
        margin-bottom: 18px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #3f3a64;
    }
    .text-md-left {
        text-align: left !important;
    }
    .intro1-content .title {
        font-size: 63px;
        line-height: 1.12;
        color: #3f3a64;
        font-weight: 600;
    }

    .intro1-content .desc {
        max-width: 540px;
        margin-top: 12px;
        p {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.67;
        }
    }
    .intro1-content .btn {
        margin-top: 28px;
    }
    .btn-primary {
        border-color: #20ad96;
        background-color: #20ad96;
        color: #fff;
    }
`;
export default Section1AccueilStc