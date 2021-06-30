import SectionBottomShapeStc from "./SectionBottomShape.stc"

const SectionBottomShape=()=>{
    return (
        <SectionBottomShapeStc >
            <div className="section-bottom-shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                    <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
                </svg>
            </div>
            <div className="section container">
                
                <div className="container">
                    <div className="section-title text-center aos-init aos-animate" data-aos="fade-up">
                        <span className="sub-title">Recherche et Rubriques.</span>
                        <h2 className="title">Moteur de recherche <span>ofa</span>oriente.com ?</h2>
                    </div>
                </div>
            </div>
            <div className="tab-content container">
                <div id="ecole" className="tab-pane fade show active">
                    <form action="https://virtuallydemo.com/ofaoriente/ecole/" methode="post">
                        <div className="course-instructor">
                            <div id="search-form" className="row checkout-form">
                                <div className="col-md-4 col-12 mb-20">
                                    <label>Type d'etablissement</label>
                                    <select name="type">
                                        <option value="all">Selectionner</option>
                                        <option>Ecole superieure</option>
                                        <option>Institut d'enseignement professionnel</option>
                                        <option>Université privée</option>
                                        <option>Université publique</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-12 mb-20">
                                    <label>Series de bac</label>
                                    <select name="series">
                                        <option value="all">Selectionner</option>
                                        <option>Economique</option>
                                        <option>Scientifique</option>
                                        <option>Littéraire</option>
                                        <option>Technique</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-12 mb-20">
                                    <label>Pays</label>
                                    <select data-target="ville" className="pays selectFilter" name="pays">
                                        <option value="all">Selectionner</option>
                                        <option value="Gabon" data-ref="Gabon">Gabon</option>
                                        <option value="Maroc" data-ref="Maroc">Maroc</option>
                                        <option value="Sénégal" data-ref="Sénégal">Sénégal</option>
                                        <option value="Rwanda" data-ref="Rwanda">Rwanda</option>
                                        <option value="Ghana" data-ref="Ghana">Ghana</option>
                                        <option value="Afrique du Sud" data-ref="Afrique du Sud">Afrique du Sud</option>
                                        <option value="Côte d’Ivoire" data-ref="Côte d’Ivoire">Côte d’Ivoire</option>
                                        <option value="Tunisie" data-ref="Tunisie">Tunisie</option>
                                        <option value="Angola" data-ref="Angola">Angola</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-12 mb-20">
                                    <label>Ville</label>
                                    <select className="ville selectFilter" name="ville">
                                        <option value="all">Selectionner</option>
                                        <option value="Libreville" data-belong="Gabon">Libreville</option>
                                        <option value="Port-Gentil" data-belong="Gabon">Port-Gentil</option>
                                        <option value="Franceville" data-belong="Gabon">Franceville</option>
                                        <option value="Casablanca" data-belong="Maroc">Casablanca</option>
                                        <option value="Rabat" data-belong="Maroc">Rabat</option>
                                        <option value="Marrakech" data-belong="Maroc">Marrakech</option>
                                        <option value="Tanger" data-belong="Maroc">Tanger</option>
                                        <option value="Fes" data-belong="Maroc">Fes</option>
                                        <option value="Agadir" data-belong="Maroc">Agadir</option>
                                        <option value="Mohammedia" data-belong="Maroc">Mohammedia</option>
                                        <option value="Settat" data-belong="Maroc">Settat</option>
                                        <option value="Meknes" data-belong="Maroc">Meknes</option>
                                        <option value="Kenitra" data-belong="Maroc">Kenitra</option>
                                        <option value="Ifrane" data-belong="Maroc">Ifrane</option>
                                        <option value="Dakar" data-belong="Sénégal">Dakar</option>
                                        <option value="Kigali" data-belong="Rwanda">Kigali</option>
                                        <option value="Accra" data-belong="Ghana">Accra</option>
                                        <option value="Cape Town" data-belong="Afrique du Sud">Cape Town</option>
                                        <option value="Johannesburg" data-belong="Afrique du Sud">Johannesburg</option>
                                        <option value="Pretoria" data-belong="Afrique du Sud">Pretoria</option>
                                        <option value="Abidjan" data-belong="Côte d’Ivoire">Abidjan</option>
                                        <option value="Yamoussoukro" data-belong="Côte d’Ivoire">Yamoussoukro</option>
                                        <option value="Tunis" data-belong="Tunisie">Tunis</option>
                                        <option value="Sfax" data-belong="Tunisie">Sfax</option>
                                        <option value="Sousse" data-belong="Tunisie">Sousse</option>
                                        <option value="Luanda" data-belong="Angola">Luanda</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-12 mb-20">
                                    <label >--</label>
                                    <input type="submit" className="btn btn-primary btn-hover-secondary" value="Rechercher" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="formation" className="tab-pane fade">
                    <div className="course-instructor">
                        <div className="row">
                            <div className="col-md-12"></div>
                        </div>
                    </div>
                </div>
                <div id="metier" className="tab-pane fade">
                    <div className="course-instructor">
                        <div className="row">
                            <div className="col-md-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </SectionBottomShapeStc>
    )
}

export default SectionBottomShape