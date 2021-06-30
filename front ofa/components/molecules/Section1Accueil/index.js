import Section1AccueilStc from './Section1Accueil.stc'
import {Container,Row,Col} from 'reactstrap'
import Bouton from '../../shared/Bouton';
import { AiOutlineSave } from "react-icons/ai";
import Link from "next/link"

const Section1Accueil=()=>{
    return(
        <Section1AccueilStc>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="intro1-content text-center text-md-left">
                            <span className="sub-title">ofaoriente.com</span>
                            <h2 className="title">Pour une meilleur <br/> orientation</h2>
                            <div className="desc">
                                <p>Un portail pour le meilleur de l’enseignement en Afrique.</p>
                            </div>
                            <Link href="/login">
                                <a><Bouton icon={<AiOutlineSave/>} texte="INSCRIPTION GRATUITE"/></a>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </Section1AccueilStc>
        
    )
}
export default Section1Accueil;