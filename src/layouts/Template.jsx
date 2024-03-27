const Template = (props) => {
  const sidebar = props.sidebar;
  const navbar = props.navbar;
  const children = props.children;
  return (
    <div>
      <div className="header">{navbar}</div>
      <div id="sidebar">{sidebar}</div>
      <div className="main-container">{children}</div>
    </div>
  );
};

export default Template;
