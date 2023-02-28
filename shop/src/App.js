import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { Main } from "./pages/main.js";
import { Detail } from "./pages/detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate(); //앞으로 가기 뒤로가기에 쓰기 or href처럼 이동

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
          </Nav>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로 가기
          </button>
          <button
            onClick={() => {
              navigate(1);
            }}
          >
            앞으로 가기
          </button>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        {/* route 안에 넣은건 /about/member 혹은 /about/location 과 같음 
        그러나 /about 페이지 위에 보여줌 -> outlet 자리에(인스타처럼)*/}
        <Route path="*" element={<div>없는 페이지요.(404페이지)</div>} />
      </Routes>
    </div>
  );
  function About() {
    return (
      <div>
        <h4>회사 정보임</h4>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default App;
