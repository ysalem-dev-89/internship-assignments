import { MdAssignmentInd } from 'react-icons/md';

import { NavbarBrand, Navbar, Button, NavbarText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar className="" color="dark" dark>
        <NavbarBrand href="/">
          <div className="d-flex gap-2 align-items-center">
            <MdAssignmentInd />
            <h2 className="h5">Bayt Internship</h2>
          </div>
        </NavbarBrand>
        <NavbarText>
          <Button color="primary" onClick={() => navigate('/signup')}>
            Signup
          </Button>
        </NavbarText>
      </Navbar>
    </header>
  );
}
