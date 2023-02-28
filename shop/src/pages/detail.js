import { useParams } from "react-router-dom";
import "../css/detail.module.css";
//css 없이 react native 에서 js 파일 내에 모든 것을 해결하기 위한 styled-components
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

export function Detail(props) {
  let { id } = useParams();
  // .find()는 array에서 해당하는게 맞으면 가져와줌
  // id params에 맞는 내용을 가져오기.
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });

  return (
    <div className="container text-center">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <div className="row">
        <div className="col">
          <img
            className="detail-Card"
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
