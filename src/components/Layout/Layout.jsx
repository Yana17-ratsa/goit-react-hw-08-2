import AppBar from '../AppBar/AppBAr';

function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
export default Layout;
