import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <div className="title">Stay Excited, Subscribe to our Newsletter</div>
            <div className="desc">Don't wanna miss something? Subscribe right now and get special promtion and monthly newsletter</div>
            <div className="footer-form">
                <form action="">
                    <input type="text" placeholder="Enter your email address"/>
                    <a href="">Explore Now</a>
                </form>
            </div>
            <div className="footer-links">
                <div className="copyright">© Paylode Limited</div>
                <div className="links">
                   <a href=""><div className="link-footer">Terms of use</div></a>
                   <a href=""><div className="link-footer">Privacy Policy</div></a>
                   <a href=""><div className="link-footer">FAQ</div></a>
                   <a href=""><div className="link-footer">Careers</div></a>
                   <a href=""><div className="link-footer">API Documentation</div></a>
                </div>
                <div className="social-links">
                   <a href=""><div className="footer-icon"><i class="fa-brands fa-facebook-f"></i></div></a>
                   <a href=""><div className="footer-icon"><i class="fa-brands fa-twitter"></i></div></a>
                   <a href=""><div className="footer-icon"><i class="fa-brands fa-instagram"></i></div></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
