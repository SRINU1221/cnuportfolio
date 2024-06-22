import React, { useState } from 'react'
import './Services.css'
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const togglTab =(index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web Development Project</h3>
                </div>

                <span className="services__button" onClick={()=> togglTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>togglTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Development Project</h3>
                        <p className="services__modal-description">Create robust web solutions with the MERN stack (MongoDB, Express.js, React, Node.js). Tailored to your specific needs.</p>
                        <ul className="services__modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Specialization in developing web applications using the MERN stack, including MongoDB, Express.js, React, and Node.js.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Create robust and scalable solutions tailored to your specific needs, whether it's a dynamic website, e-commerce platform, or custom web application.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Focus on delivering high-quality code and optimal performance for a seamless user experience.
                                    </p>
                                </i>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>




            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Front end Development</h3>
                </div>

                <span className="services__button" onClick={()=> togglTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>togglTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Front end Development</h3>
                        <p className="services__modal-description">PD live Web Application user interfaces with React.js, HTML, and JavaScript. Focus on user experience.</p>
                        <ul className="services__modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Proficiency in building engaging user interfaces and interactive web experiences using React.js, HTML, and JavaScript.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Emphasis on user experience, responsiveness, and modern design principles.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    PD live Web application interfaces that captivate your target audience and provide a delightful browsing experience.
                                    </p>
                                </i>
                            </li>

                            


                        </ul>
                    </div>
                </div>
            </div>






            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Problem Solving DSA</h3>
                </div>

                <span className="services__button" onClick={()=> togglTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>togglTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Problem Solving DSA</h3>
                        <p className="services__modal-description">Solve coding challenges with efficient Python solutions. Algorithms and Data Strucutures</p>
                        <ul className="services__modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Offer coding services in Python for solving algorithms, data structures, and coding challenges.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Provide efficient and optimized Python solutions to overcome complex problems.
                                    </p>
                                </i>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Leverage the power of Python's versatility and flexibility to tackle coding challenges effectively.
                                    </p>
                                </i>
                            </li>

                           


                        </ul>
                    </div>
                </div>
            </div>





        </div>
    </section>
  )
}

export default Services
