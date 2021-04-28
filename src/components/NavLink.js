function NavLink(props) {
  return (
    <Link to={props.to} className={"nav-link" + props.isActive ? "active" : ""}>
      {props.children}
    </Link>
  );
}

export default NavLink;
