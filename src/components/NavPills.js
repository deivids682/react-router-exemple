import styled from "styled-components";

function NavPills(props) {
  return <Sidebar>{props.children}</Sidebar>;
}

export default NavPills;

const Sidebar = styled.div`
  background-color: #daad86;
  width: 8vw;
  min-width: 150px;
  height: 100vh;
  position: fixed;
`;
