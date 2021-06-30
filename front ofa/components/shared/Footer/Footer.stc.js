import Styled from 'styled-components'

const FooterStc=Styled.div`
    .footer-section {
        padding: 70px 0 50px;
        background-color: #f8f8f8;
        overflow: hidden;
    }
    .main-wrapper, .section {
        float: left;
        width: 100%;
    }
    .footer-widget-title {
        font-size: 18px;
        margin-bottom: 17px;
        font-weight: 600;
    }
    .footer-widget-content {
        font-size: 14px;
        font-weight: 500;
    }
    .footer-widget-content p {
        margin-bottom: 11px;
    }
    .last
    {
        background: #5bb19a;
        color: white !important;
        padding: 1px 8px;
        border-radius: 5px;
    }
`
export default FooterStc;