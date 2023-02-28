import "../css/detail.css";

export function Detail(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img
            className="detail-Card"
            src={process.env.PUBLIC_URL + `./shoes1.jpg`}
            alt="상품이미지"
          ></img>
        </div>
        <div className="col">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>상품설명</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
