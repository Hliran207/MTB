/* eslint-disable no-undef */

const NavBarChildPage = () => {
  return (
    <header className="NavBarChildPage">
      <button className="NavBarChildPage-button" onClick={() => { window.location.href = '/'; }}>התנתקות</button>
      <div className="NavBarChildPage-title">MTB-ילד</div>
      <button className="NavBarChildPage-button home-button" onClick={() => { window.location.href = '/ChildPage'; }}>דף בית</button>
    </header>
  );
};

export default NavBarChildPage;
