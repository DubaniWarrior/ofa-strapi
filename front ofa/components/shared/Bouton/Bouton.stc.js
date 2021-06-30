import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
const BoutonStc = styled(Button)`
	font-size: 14px;
	font-weight: 700;
	line-height: 50px;
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	height: 52px;
	padding: 0 40px;
	cursor: pointer;
	white-space: nowrap;
	border-width: 1px;
	border-style: solid;
	border-color: transparent;
	border-radius: 5px;
	outline: 0;
	&.btn-primary {
        border-color: #20ad96;
        background-color: #20ad96;
        color: #fff;
    }

`;

export default BoutonStc;
