import React from 'react';
class Footer extends React.Component {
    render() {
        return (
<div>
        <div className="divisor">
          <p>_</p>
        </div> 
        <section id="footer">
          <div>
            <p>Questions? Call 1 (408) 600-1718 (USA)</p>
            <ul>
              <li><a href>FAQ</a></li>
              <li><a href>Investor Relations</a></li>
              <li><a href>Privacy</a></li>
              <li><a href>Speed Test</a></li>
              <li><a href>Help Center</a></li>
              <li><a href>Jobs</a></li>
              <li><a href>Cookie Preferences</a></li>
              <li><a href>Legal Notices</a></li>
              <li><a href>Account</a></li>
              <li><a href>Ways to Watch</a></li>
              <li><a href>Corporate Information</a></li>
              <li><a href>Only on Netlix</a></li>
              <li><a href>Media Center</a></li>
              <li><a href>Terms of Use</a></li>
              <li><a href>Contact Us</a></li>
            </ul>
          </div>
          <div className="languageSelector">
            <select name="languages" id="languageSelector">
              <option value="english">𑁍 English</option>
              <option value="espanol">𑁍 Russian</option>
            </select>
          </div>
          <div id="footerSignature">
            <p>Cloned by Jhenry Sierra for Portfolio</p>
          </div>
        </section>
      </div>
        )
    }
}
export default Footer;