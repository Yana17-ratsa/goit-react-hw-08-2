import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
export default AppBar;
