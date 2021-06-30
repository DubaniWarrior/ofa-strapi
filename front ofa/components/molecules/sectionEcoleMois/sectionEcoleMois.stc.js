import Styled from 'styled-components';

const EcoleStc=Styled.section`
    .teacher-quote {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #faf8f6;
        @media screen and (max-width: 767px) {
            display:none !important;
        }
    }

    .teacher-quote .image {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        width: 270px;
        margin-left: 0px;
        -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
        transform: translateY(50px);

        @media screen and (max-width: 767px) {
         
            display:none !important;
            
        }
    }

    .teacher-quote-wrapper.aos-init.aos-animate {
        @media screen and (max-width: 767px) {
            display:none !important;
        }
    }
    
    .teacher-quote .content {
        padding: 70px 30px 70px 50px;
    }
    .teacher-quote .content .section-title {
        margin-bottom: 25px;
    }
    .section-title {
        position: relative;
        z-index: 99;
        margin-bottom: 60px;
    }
    .title span {
        font-weight: 400;
        color: #20ad96;
        font-size:600;
    }
    .teacher-quote .content .experience .title {
        font-size: 15px;
        line-height: 2;
        margin-bottom: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #3f3a64;
    }
    .teacher-quote .content .experience .link {
        font-size: 14px;
        font-weight: 700;
        color: #8c89a2;
    }
    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .teacher-quote .content .quote {
        width: 64.5%;
        padding: 0 15px;
    }
    .teacher-quote .content .experience {
        width: 35.406%;
        padding: 0 15px;
    }
    .teacher-quote .content .experience .amount {
        font-size: 48px;
        font-weight: 800;
        line-height: 1.3;
        display: block;
        color: #20ad96;
    }
    .teacher-quote .content .quote p {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
    }
`;
export default EcoleStc