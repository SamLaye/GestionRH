const Template = (props) => {
  const sidebar = props.sidebar;
  const navbar = props.navbar;
  const children = props.children;
  return (
    <div className="grid-container">
      <header className="header">{navbar}</header>
      <aside id="sidebar">{sidebar}</aside>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Template;
