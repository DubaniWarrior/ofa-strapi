import Styled from 'styled-components';
const SectionEtudiantTestimonyStc=Styled.div`
    .section-padding
    {
        background-image: url('https://virtuallydemo.com/ofaoriente/wp-content/themes/ofa/assets/images/bg/background-pattern-grid-line.png');
        background-color: rgb(245, 241, 237);
        padding-top: 100px!important;
        padding-bottom: 100px!important;
    }
    .section-title {
        position: relative;
        z-index: 99;
        margin-bottom: 60px;
    }
    .text-center {
        text-align: center !important;
    }

    .section-title .sub-title {
        font-size: 15px;
        font-weight: 500;
        line-height: 1;
        display: block;
        margin-bottom: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #8c89a2;
    }
    .section-title .title {
        font-size: 34px;
        margin: 0;
        color: #3f3a64;
        font-weight:600;
    }
    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .max-mb-70 {
        margin-bottom: 70px!important;
    }

    .funfact {
        text-align: center;
    }
    .section-title .title span {
        font-weight: 400;
        color: #20ad96;
    }
    .funfact .number {
        font-size: 48px;
        font-weight: 800;
        line-height: 1;
        display: block;
        color: #20ad96;
    }
    .funfact .text {
        font-size: 15px;
        font-weight: 700;
        line-height: 1.34;
        margin-top: 14px;
        margin-bottom: 0;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #3f3a64;
    }

    .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
        height: auto;
        width: 100%;
    }
    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
    }
    .testimonial {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%;
        padding: 40px 28px;
        border-radius: 5px;
        background: #fff;
        -webkit-box-shadow: 0 0 30px rgb(51 51 51 / 10%);
        box-shadow: 0 0 30px rgb(51 51 51 / 10%);
    }
    .testimonial .image {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        width: 70px;
    }
    .testimonial .content {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        width: calc(100% - 70px);
        padding-left: 30px;
    }
    .testimonial .content p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        margin-bottom: 34px;
    }
    .testimonial .content .name {
        font-size: 15px;
        line-height: 1.3;
        margin-bottom: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .testimonial .content .position {
        font-size: 14px;
        display: block;
        margin-top: 11px;
        color: #7e7e7e;
    }

    .testimonial .image img {
        width: 70px;
        border-radius: 50%;
    }
    .testimonial .content {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        width: calc(100% - 70px);
        padding-left: 30px;
    }
    .testimonial .content p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        margin-bottom: 34px;
    }
`;
export default SectionEtudiantTestimonyStc