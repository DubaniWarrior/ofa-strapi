import Styled from 'styled-components';

const SectionBrandStc=Styled.div`

    margin-top:80px;
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
    .section-title {
        position: relative;
        z-index: 99;
        margin-bottom: 60px;
        padding: 40px;;
    }
    .course-3 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        height: 100%;
        padding: 20px;
        -webkit-transition: all .25s cubic-bezier(.645,.045,.355,1);
        -o-transition: all .25s cubic-bezier(.645,.045,.355,1);
        transition: all .25s cubic-bezier(.645,.045,.355,1);
        border-radius: 5px;
        background-color: #fff;
    }

    .course-3 .thumbnail {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 170px;
        height: 170px;
        margin: 0 30px 0 0;
        border-radius: 50%;
        height: 65px;
        width: 65px;
    }

    .course-3 .thumbnail .image {
        display: block;
    }

    .course-3 .info .title {
        font-size: 20px;
        line-height: 1.6;
        margin: 0;
        font-weight:600;
    }
    .course-3 .info .meta li:last-child {
        margin-right: 0;
    }
    .course-3 .thumbnail .image img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .course-3 .info .meta li i {
        margin-right: 10px;
    }
`;
export default SectionBrandStc;