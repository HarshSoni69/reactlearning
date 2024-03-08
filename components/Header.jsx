import { Link } from "react-router-dom";
import useActiveLink from "../uitils/useLink";
import "../source/style.css";

const Title = () => {
  return (
    <a className='w-24 mix-blend-multiply' href="/">
      <img src="https://st2.depositphotos.com/38197074/46918/v/450/depositphotos_469188612-stock-illustration-initial-letter-vector-logo.jpg" alt="image logo" className="logoimage" />
    </a>
  );
};

const HeaderComponet = () => {
  const { activeLink, setActiveLink } = useActiveLink();

  return (
    <div className='flex justify-between border-2 border-black items-center mt-px'>
      <Title />
      <div className='flex justify-center'>
        <ul className='flex justify-center pr-2 gap-2'>
          <Link
            className={activeLink === '/' ? 'text-orange-400 underline' : 'text-black hover:text-orange-400'}
            to="/"
            onClick={() => setActiveLink('/')}
          >
            <li>Home</li>
          </Link>
          <Link
            className={activeLink === '/about' ? 'text-orange-400 underline' : 'text-black hover:text-orange-400'}
            to="/about"
            onClick={() => setActiveLink('/about')}
          >
            <li>About</li>
          </Link>
          <Link
            className={activeLink === '/contact' ? 'text-orange-400 underline' : 'text-black hover:text-orange-400'}
            to="/contact"
            onClick={() => setActiveLink('/contact')}
          >
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponet;
