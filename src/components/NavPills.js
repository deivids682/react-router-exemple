function NavPills(props) {
  return (
    <div>
      <div className="col-1">
        <div className="nav flex-column nav-pills">{props.children}</div>
      </div>
    </div>
  );
}

export default NavPills;
