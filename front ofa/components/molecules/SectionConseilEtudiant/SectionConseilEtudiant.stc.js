import Styled from 'styled-components'

const SectionConseilEtudiantStc = Styled.div`
.section-padding
    {
        padding-top: 100px!important;
        padding-bottom: 100px!important;
    }
.section-title {
        position: relative;
        z-index: 99;
        margin-bottom: 60px;
    }
    .title span{
        font-weight: 600 !important;
        color: #20ad96;
    }

    .course-2 {
        overflow: hidden;
        height: 100%;
        -webkit-transition: all .25s cubic-bezier(.645,.045,.355,1);
        -o-transition: all .25s cubic-bezier(.645,.045,.355,1);
        transition: all .25s cubic-bezier(.645,.045,.355,1);
        border-radius: 5px;
        background-color: #faf8f6;
    }
    .course-2 .thumbnail {
        position: relative;
        overflow: hidden;
    }
    .course-2 .thumbnail .image {
        display: block;
    }
    .course-2 .thumbnail .image img {
        width: 100%;
        -webkit-transition: all 1.5s cubic-bezier(0,0,.2,1);
        -o-transition: all 1.5s cubic-bezier(0,0,.2,1);
        transition: all 1.5s cubic-bezier(0,0,.2,1);
    }

    .course-2 .info .title  {
        font-size: 24px;
        line-height: 1.5;
        margin: 0;
        color: #3f3a64;
        font-weight: 600;
    }
    .course-2 .info {
        position: relative;
        padding: 30px 30px 40px;
    }
    .link-lg {
        font-size: 18px;
        
    }
    .link {
        font-weight: 500;
        line-height: 1.67em;
        color: #8c89a2;
    }
    .text-center {
        text-align: center !important;
    }
`;
export default SectionConseilEtudiantStc;