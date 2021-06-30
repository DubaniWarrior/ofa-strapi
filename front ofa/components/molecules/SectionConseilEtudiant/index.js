import SectionConseilEtudiantStc from './SectionConseilEtudiant.stc';

const SectionConseilEtudiant=()=>{
    return(
        <SectionConseilEtudiantStc>
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title text-center aos-init aos-animate" data-aos="fade-up">
                        <span className="sub-title">Articles</span>
                        <h2 className="title">Conseils pour étudiants</h2>
                    </div>

                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                        <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                            <div className="course-2">
                                <div className="thumbnail">
                                    <a href="" className="image"><img src="https://virtuallydemo.com/ofaoriente/wp-content/uploads/2021/02/222.jpg" alt="Course Image" /></a>
                                </div>
                                <div className="info">
                                    <h3 className="title"><a href="">Choisir la formation qui te convient avec ou sans le Bac</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                            <div className="course-2">
                                <div className="thumbnail">
                                    <a href="" className="image"><img src="https://virtuallydemo.com/ofaoriente/wp-content/uploads/2021/02/bac.jpg" alt="Course Image" /></a>
                                </div>
                                <div className="info">
                                    <h3 className="title"><a href="">Quels sont les secteurs de pointe en Afrique ?</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                            <div className="course-2">
                                <div className="thumbnail">
                                    <a href="" className="image"><img src="https://virtuallydemo.com/ofaoriente/wp-content/uploads/2021/02/333.jpg" alt="Course Image" /></a>
                                </div>
                                <div className="info">
                                    <h3 className="title"><a href="">Chercher le logement étudiant idéal</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row max-mt-70">
                        <div className="text-center col-lg-7 mx-auto">
                            <a className="link link-lg" href="">
                                Bénéficiez d'une consultation adaptée à votre parcours de vie <mark>Call to action <i className="far fa-long-arrow-right"></i></mark>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </SectionConseilEtudiantStc>

    )
}
export default SectionConseilEtudiant