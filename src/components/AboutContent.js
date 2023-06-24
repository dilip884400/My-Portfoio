import './AboutContentStyle.css'
import React, { useState } from 'react'

function AboutContent() {
    const [toggleTab,setToggleTab] = useState(1)

    function toggleState(index){
            setToggleTab(index)
    }

  return (
    <>
    <section className='about'>

    <div className='row'>

        <div className='coloum'>
            <div className='about-img'></div>
        </div>

        <div className='coloum'>
            <div className='tabs'>

            <div className={toggleTab === 1 ? 'single-tab active-tab' : 'single-tab'}
            onClick={()=> toggleState(1)}
            >
                <h2>About</h2>
            </div>

            <div className={toggleTab === 2 ? 'single-tab active-tab' : 'single-tab'}
            onClick={()=> toggleState(2)}
            >
                <h2>Skills</h2>
            </div>


            <div className={toggleTab === 3 ? 'single-tab active-tab' : 'single-tab'}
            onClick={()=> toggleState(3)}
            >
                <h2>Experience</h2>
            </div>

            </div>

             <div className='tab-content'>

             {/* about */}

              <div className={toggleTab === 1 ? 'content active-content' : 'content'}>
                <h2>Who am I?</h2>
                <p>
My name is Dilip Lovevanshi, and I am 22 years old. Originally from Rajgarh, Madhya Pradesh, I am currently residing in Nagpur, Maharashtra. I hold a Bachelor's degree in Computer Application (BCA). 
<p className='content-heading-two'>I am an optimistic and self-motivated individual, looking forward to work in an IT industry which allows pushing my boundaries and serve really good work. Strong knowledge of HTML, CSS, JavaScript and React.</p></p>
                <br/>
                
                <span>After graduating with a BCA degree, I couldn't continue my studies due to severe financial crises at home. To address this, I turned to farming. Transitioning from being a BCA graduate to a farmer was challenging. However, my passion for problem-solving persisted, leading me to discover the world of tech industries and their workings. While browsing numerous skill-building websites and watching countless tutorial videos, I felt overwhelmed and directionless. But joining the FunctionUp bootcamp turned out to be my best decision so far.</span>
              </div>

              {/* skills */}
              <div className={toggleTab === 2 ? 'content active-content' : 'content'}>
                <div className='skills-row'>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>HTML</h3>
                        <div className='progress'>
                            <div className='progress-bar HTML'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>CSS</h3>
                        <div className='progress'>
                            <div className='progress-bar CSS'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>JAVASCRIPT</h3>
                        <div className='progress'>
                            <div className='progress-bar JAVASCRIPT'>
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>React</h3>
                        <div className='progress'>
                            <div className='progress-bar React'>
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>React-Routers</h3>
                        <div className='progress'>
                            <div className='progress-bar Routers'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>Redux</h3>
                        <div className='progress'>
                            <div className='progress-bar Redux'>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>Material UI</h3>
                        <div className='progress'>
                            <div className='progress-bar MUI'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>React-Icons</h3>
                        <div className='progress'>
                            <div className='progress-bar React-Icons'>
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>DSA</h3>
                        <div className='progress'>
                            <div className='progress-bar DSA'>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>Git & Github</h3>
                        <div className='progress'>
                            <div className='progress-bar git'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className='skills-coloum'>
                    <div className='progress-wrap'>
                        <h3>VS Code</h3>
                        <div className='progress'>
                            <div className='progress-bar VS-code'>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                   </div>


                </div>
              </div>

              {/* experience */}

              <div className={toggleTab === 3 ? 'content active-content' : 'content'}
              >
                <div className='exp-coloum'>
                    <h3>FunctionUp (Front-End Developer Trainee)</h3>
                    <span className='exp-loc'>-Bengaluru, Karnataka</span>
                    <span className='exp-dur'>Feb 2023 - present</span>
                    <ul className='exp-info'><li>Trained in Frontend Development using HTML, CSS, JavaScript and React</li>
<li>Skilled in teamwork, owning tasks and timely deliveries.</li>
<li>Work on real life projects given by the mentors.</li></ul>
                </div>

              </div>

             </div>

        </div>

    </div>

    </section>
    </>
  )
}

export default AboutContent
