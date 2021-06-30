import Styled from 'styled-components';

const SectionBottomShapeStc=Styled.section`
       .section-title .title {
            font-size: 34px;
            margin: 0;
            color: #3f3a64;
            font-weight: 700;
            line-height: 1.3;
            margin-top: 0;
            color: #333;
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
        .section-title .title span {
            font-weight: 400;
            color: #20ad96;
        }

        input.btn.btn-primary.btn-hover-secondary {
            color: #fff !important;
            width: 100%;
            border-color: #20ad96;
            background-color: #20ad96;
            line-height: 1;
            padding: 0.6em 1em 0.4em;
            justify-content: center;
            height: 52px;
        }

        .section-bottom-shape 
        {
            -webkit-transform: rotateX(180deg);transform: rotateX(180deg);
            position: relative;
            z-index: 1;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 70px;
            top: -70px;
        }

        .section-bottom-shape svg {
            width: 100%;
            height: 100%;
        }
        svg:not(:root) {
            overflow: hidden;
        }
        .section-bottom-shape svg path {
            fill: #fff;
        }
`
export default SectionBottomShapeStc