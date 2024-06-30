import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Menu() {
  return (
    <>
      <div className="container fixed z-10 md:block">
        <Navbar />
      </div>
    </>
  );
}

export default Menu;
