import { Card } from "../components/card";
import styled from "styled-components";

let Margin = styled.div`
  margin-top: 10px;
`;

export function Main(props) {
  return (
    <>
      <div className="main-bg"></div>

      <div className="container text-center">
        <div className="row">
          {props.shoes.map((a, i) => {
            return (
              <Margin>
                <Card shoes={props.shoes} i={i} margin={Margin} />
              </Margin>
            );
          })}
        </div>
      </div>
    </>
  );
}
