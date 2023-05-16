import React from 'react';
export function Section_2(content2) {
    return (
        <div>
            <div className="divisor">
                <p>_</p>
            </div>
            <section>
                <div id="thirdSection">
                    <div className="thirdSectionContent">
                        <div className="thirdSectionImg">
                            <img src={content2.img} alt="" />
                        </div>
                        <div className="thirdSectionText">
                            <h2>{content2.title}</h2>
                            <h3>{content2.text}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section_2;