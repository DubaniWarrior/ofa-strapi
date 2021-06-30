import SectionEtudiantTestimonyStc from './SectionEtudiantTestimony.stc';

const SectionEtudiantTestimony=()=>{
    return(
        <SectionEtudiantTestimonyStc>
            <div
                className="section section-padding bg-pattern fix"
                data-bg-image="https://virtuallydemo.com/ofaoriente/wp-content/themes/ofa/assets/images/bg/background-pattern-grid-line.png"
                data-bg-color="#f5f1ed"
            >
                <div className="container">
                    <div className="section-title text-center aos-init aos-animate" data-aos="fade-up">
                        <span className="sub-title">Témoignages</span>
                        <h2 className="title">Ce que disent nos <span>Heureux</span> étudiants.​</h2>
                    </div>

                    <div className="row max-mb-70">
                        <div className="col-lg-9 mx-auto">
                            <div className="row row-cols-md-3 row-cols-1 max-mb-n30">
                                <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                                    <div className="funfact">
                                        <div className="number">+<span className="counter">3092</span></div>
                                        <h6 className="text">Demandes d'inscription</h6>
                                    </div>
                                </div>

                                <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                                    <div className="funfact">
                                        <div className="number">+<span className="counter">1926</span></div>
                                        <h6 className="text">Inscriptions complétes</h6>
                                    </div>
                                </div>

                                <div className="col max-mb-30 aos-init aos-animate" data-aos="fade-up">
                                    <div className="funfact">
                                        <div className="number"><span className="counter">100</span>%</div>
                                        <h6 className="text">Taux de satisfaction</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider swiper-container 
                    swiper-container-initialized swiper-container-horizontal 
                    swiper-container-autoheight aos-init aos-animate" data-aos="fade-up">
                        
                        <div className="swiper-wrapper" >
                            
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" >
                                        <div className="testimonial">
                                            <div className="image"><img src="https://live.hasthemes.com/html/4/maxcoach-preview/maxcoach/assets/images/testimonial/70/testimonial-2.jpg" alt="" /></div>
                                            <div className="content">
                                                <p>
                                                    J’étais à la recherche d’un établissement qui cadrait correctement avec mon projet scolaire et professionnel et grâce à OfaOriente.com je suis inscrit en Commerce International dans une école où je me sens
                                                    épanouie et en confiance.
                                                </p>
                                                <h6 className="name">Fidélia</h6>
                                                <span className="position">IFIAG</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" >
                                        <div className="testimonial">
                                            <div className="image"><img src="https://live.hasthemes.com/html/4/maxcoach-preview/maxcoach/assets/images/testimonial/70/testimonial-2.jpg" alt="" /></div>
                                            <div className="content">
                                                <p>
                                                    J’étais à la recherche d’un établissement qui cadrait correctement avec mon projet scolaire et professionnel et grâce à OfaOriente.com je suis inscrit en Commerce International dans une école où je me sens
                                                    épanouie et en confiance.
                                                </p>
                                                <h6 className="name">Fidélia</h6>
                                                <span className="position">IFIAG</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </SectionEtudiantTestimonyStc>

    )
}
export default SectionEtudiantTestimony