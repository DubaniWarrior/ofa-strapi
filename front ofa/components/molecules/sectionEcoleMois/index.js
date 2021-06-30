import EcoleStc from './sectionEcoleMois.stc';

const Ecole=()=>{
    return(
        <EcoleStc>
            <div className="container">
                <div className="teacher-quote-wrapper aos-init aos-animate" data-aos="fade-up">
                    <div className="teacher-quote">
                        <div className="image"><img src="https://virtuallydemo.com/ofaoriente/wp-content/uploads/2021/04/esmc.jpg" alt="" /></div>
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">Ecole du mois : <span>ESMC</span></h2>
                            </div>
                            <div className="row">
                                <div className="quote">
                                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard.</p>
                                </div>
                                <div className="experience">
                                    <span className="amount">9<span> Formations</span></span>
                                    <h6 className="title">BUSINESS SCHOOL</h6>
                                    <a href="" className="link">En savoir plus <i className="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EcoleStc>

    )
}
export default Ecole