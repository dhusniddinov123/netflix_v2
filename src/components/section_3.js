import React from 'react';
class Section_3 extends React.Component {
    render() {
        return (
            <div>
                <div className="divisor">
                    <p>_</p>
                </div>
                <section id="frequentlyAskedQuestions">
                    <div className="faqContent">
                        <div className="faqTitle">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="questionContainer">
                            <h3>What is Netflix</h3>
                            <div className="expandSymbol">
                                <img src="https://cdn3.iconfinder.com/data/icons/ui-elements-light/100/UI_Light_plus-512.png" alt="" />
                            </div>
                        </div>
                        <div className="questionContainer">
                            <h3>How much does Netflix cost?  </h3>
                            <div className="expandSymbol">
                                <img src="https://cdn3.iconfinder.com/data/icons/ui-elements-light/100/UI_Light_plus-512.png" alt="" />
                            </div>
                        </div>
                        <div className="questionContainer">
                            <h3>Where can I watch Netflix</h3>
                            <div className="expandSymbol">
                                <img src="https://cdn3.iconfinder.com/data/icons/ui-elements-light/100/UI_Light_plus-512.png" alt="" />
                            </div>
                        </div>
                        <div className="questionContainer">
                            <h3>How do I cancel?</h3>
                            <div className="expandSymbol">
                                <img src="https://cdn3.iconfinder.com/data/icons/ui-elements-light/100/UI_Light_plus-512.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="emailBottom">
                        <p>Ready to watch NETFLIX now? Input your email to create or restart your Netflix membership</p>
                        <input type="text" id="email" placeholder="Email address" />
                        <button htmlFor="email">Get Started &gt; </button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Section_3;