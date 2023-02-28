import { Card } from "../components/card";

export function Main(props) {
  return (
    <>
      <div className="main-bg"></div>

      <div className="container text-center">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <Card shoes={props.shoes} i={i} />;
          })}
        </div>
      </div>
    </>
  );
}
