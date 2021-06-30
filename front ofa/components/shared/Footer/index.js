import FooterStc from "./Footer.stc"

const Footer=()=>{
    return(
        <FooterStc>
            <div className="footer-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-5 col-12 max-mb-50">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">ofaoriente.com</h4>
                                <div className="footer-widget-content">
                                    <div className="content">
                                        <p>Plus grands réseau d’établissements supérieurs et professionnels en Afrique.</p>
                                        <p>+212 522 33 44 55</p>
                                        <p><a href="">info@ofaoriente.com </a></p>
                                    </div>
                                    <div className="footer-social-inline">
                                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Rubriques</h4>
                                <div className="footer-widget-content">
                                    <ul className="column-2">
                                        <li><a href="https://virtuallydemo.com/ofaoriente/ecole/">Etablissements</a></li>
                                        <li><a href="https://virtuallydemo.com/ofaoriente/formation/">Formations</a></li>
                                        <li><a href="https://virtuallydemo.com/ofaoriente/metier/">Métiers</a></li>
                                        <li><a href="">Vols et guides</a></li>
                                        <li><a href="#">Logement</a></li>
                                        <li><a href="#" className="last">Pour les professionnels</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Liens utiles</h4>
                                <div className="footer-widget-content">
                                    <ul>
                                        <li><a href="#">Inscription</a></li>
                                        <li><a href="#">Bourses</a></li>
                                        <li><a href="#">Mentions légales</a></li>
                                        <li><a href="#">Journées portes ouvertes</a></li>
                                        <li><a href="#">Salon virtuel</a></li>
                                        <li><a href="#">Conditions d'utilisation</a></li>
                                        <li><a href="#">politique de confidentialité</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row max-mt-20">
                        <div className="col">
                            <p className="copyright">© 2021 ofa oriente. <a href="">All Rights Reserved</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </FooterStc>
    )
}

export default Footer