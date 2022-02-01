import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="foothold">
        <div className="footleft">
          <h2> Laundromat </h2>
          <p>
            Giving you the leisure of staying fresh and clean with less stress
          </p>
          <p> Login if you already have an account</p>
          <button className="footsign"> Login!</button>
        </div>
        <div className="footnav">
          <h4> Quick Links</h4>
          <a>About Us</a>
          <a> My profile</a>
          <a> Contact us</a>
        </div>
        <div className="footnav">
          <h4> Stay connected</h4>
          <a>LinkedIn</a>
          <a> Facebook</a>
          <a> Google</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
