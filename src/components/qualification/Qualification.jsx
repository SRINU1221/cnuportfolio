import React, { useState } from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const togglTab =(index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex" } onClick={()=> togglTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex" } onClick={()=>togglTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState ===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">(B.Tech)in Information Technology</h3>
                            <span className="qualification__subtitle">Vardhaman College of Engineering(VCE), Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019-2023
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intermediate(MPC)</h3>
                            <span className="qualification__subtitle">Brilliant Junior Kalashal , Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017-2019
                            </div>
                        </div>   
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">School(SSC)</h3>
                            <span className="qualification__subtitle">Takshashila High School, Veldanda</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016-2017
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState ===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Development Engineer</h3>
                            <span className="qualification__subtitle">Rugged Monitoring, Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 08-2023 - <i className="uil uil-calendar-alt"></i> 04-2024
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>


                    

                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification
