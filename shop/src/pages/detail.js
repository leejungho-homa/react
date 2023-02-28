import { useParams } from "react-router-dom";
import "../css/detail.module.css"; //이름.module.css는 그 파일에만 종속됨//

export function Detail(props) {
  let { id } = useParams();
  // .find()는 array에서 해당하는게 맞으면 가져와줌
  // id params에 맞는 내용을 가져오기.
  let 찾은상품 = props.shoes.find(function (x) {
    // eslint-disable-next-line
    return x.id == id;
  });

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img
            src={process.env.PUBLIC_URL + `/shoes${id}.jpg`}
            alt="상품이미지"
          ></img>
        </div>
        <div className="col">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
