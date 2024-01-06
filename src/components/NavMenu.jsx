import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function NavMenu() {
  return (
    <Navbar expand="lg shadow py-4">
      <Container>

        <h2>Pti.</h2>
        <div className='Nav__layout'>

          <Form className="NavSearchBox m-auto shadow-sm">
            <Form.Control
            type="search"
            placeholder="Search Audiobook"
            className="NavSearchBox__Size outline-none"
            aria-label="Search"
            />
            <CiSearch className='Search__icon' />
          </Form>

          <Form.Select className='menu__select--box shadow'>
            <option value="1">Home</option>
            <option value="2">Details</option>
            <option value="3">Category</option>
            <option value="3">My Favorites</option>
            <option value="3">Profile</option>
            <option value="3">Log In / Sign Up</option>
          </Form.Select>

        </div>

        <div className='profile__section'>
            <CgProfile/>
        </div>

        </Container>
    </Navbar>
  );
}
export default NavMenu;