import Image from "next/image"
const Footer = () => {
  return (
    <footer className="flex justify-between md:w-full flex-col h-auto z-10 bg-green-500 mx-auto">
      <div className='flex inline-flex justify-around pt-40 pb-10 w-full h-full'>
        <div className="text-white font-xl font-roboto">
          <h2> Laundromat </h2>
          <p>
            Giving you the leisure of staying fresh and clean with less stress
          </p>
          <p> Login if you already have an account</p>
          <input type="button" value="login !" className="p-1 text-white bg-indigo-600"/>
        </div>
        <div className='flex flex-col text-white font-roboto'>
          <h4 > Quick Links</h4>
          <a>About Us</a>
          <a> My profile</a>
          <a> Contact us</a>
        </div>
        <div className='flex flex-col text-white font-roboto'>
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
