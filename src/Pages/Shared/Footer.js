import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10 max-w-7xl mx-auto px-12">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className=''>
                <footer className="my-10 text-center">
                    <div>
                        <p>Copyright &copy; {currentYear} - All right Design by Mirajul Alam Alif.</p>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;