import React from 'react';
export function Header(PROPS) {
    return (
        <section id="mainLanding">
        <header>
          <div className="mainLogo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
          </div>
          <div className="navBar">
            <nav>
              <ul>
                <select name="languages" id="selectLanguage">
                  <option value="english">𑁍 English</option>
                  <option value="espanol">𑁍 Russian</option>
                </select>
                <li className="loginBtn"><a href="login">Login</a></li>
              </ul>
            </nav>
          </div>
          <div className="backgroundImage">
            <img src="http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg)" alt="" />
          </div>
        </header>
        <section className="mainSection">
          <div className="mainText">
            <h2>Unlimited Movies, TV Shows &amp; much more!</h2>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="getStarted">
              <input type="text" id="email" placeholder="Email address" />
              <button htmlFor="email">Get Started &gt; </button>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    )
}
export default Header;