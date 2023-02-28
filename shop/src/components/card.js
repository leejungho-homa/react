export function Card(props) {
  return (
    <div className="col">
      <img
        src={process.env.PUBLIC_URL + `./shoes${props.i}.jpg`}
        width="80%"
        alt="상품이미지임"
      />
      <h4>상품명 : {props.shoes[props.i].title}</h4>
      <p>상품설명 : {props.shoes[props.i].content}</p>
      <p>가격 : {props.shoes[props.i].price}</p>
    </div>
  );
}
