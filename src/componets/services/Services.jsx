import '../../css/Services.css';
import ResponsiveIcon from '../../assets/svg/technology-icon-8.svg';
import SemanticIcon from '../../assets/svg/code.svg';
import MotionApp from '../../assets/svg/responsive.svg';

function Services() {
    return(
        <>
            <section id="services">
                <div className="text-services">
                    <h1 className="title-services">Serviços</h1>
                </div>
                <div className="cards-service">
                    <div className="card-service">
                        <img src={SemanticIcon} alt="" />
                        <h2>Semantic Code</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iste sequi ipsum ullam consectetur obcaecati velit eaque.</p>
                    </div>
                    <div className="card-service">
                        <img src={ResponsiveIcon} alt="" />
                        <h2>Clean Code</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iste sequi ipsum ullam consectetur obcaecati velit eaque.</p>
                    </div>
                    <div className="card-service">
                        <img src={ResponsiveIcon} alt="" />
                        <h2>Responsive App</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iste sequi ipsum ullam consectetur obcaecati velit eaque.</p>
                    </div>
                    <div className="card-service">
                        <img src={MotionApp} alt="" />
                        <h2>Motion App</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iste sequi ipsum ullam consectetur obcaecati velit eaque.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services