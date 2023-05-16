import React from 'react';
export function Section_1(content1) {
    return (
        <div>
            <div className="divisor">
                <p>_</p>
            </div>
            <section>
                <div id="secondSection">
                    <div className="secondSectionContent">
                        <div className="secondSectionText">
                            <h2>{content1.title}</h2>
                            <h3>{content1.text}</h3>
                        </div>
                        <div className="sectionImg">
                            <img src={content1.img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section_1;
