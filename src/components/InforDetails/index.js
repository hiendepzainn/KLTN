import img1 from "../../assets/images/1.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "./InforDetails.css";
import img12 from "../../assets/images/12.jpg";
import img13 from "../../assets/images/13.jpg";
import img14 from "../../assets/images/14.jpg";
import img15 from "../../assets/images/15.jpg";
import img16 from "../../assets/images/16.jpg";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoChatbox } from "react-icons/io5";

var InforDetails = () => {
  return (
    <>
      <div className="infor-component">
        <div className="left">
          <div className="inner-left">
            <div className="outer-img">
              <img src={img1} alt="avatar" />
            </div>
            <div className="ready">Đang sẵn sàng</div>
            <div className="outer-fb-icon">
              <FaFacebook className="fb-icon" />
            </div>
            <div className="join-day">
              <span className="text">NGÀY THAM GIA:</span>
              <span className="number">19/04/2018</span>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="general">
            <div className="up">
              <span className="name">Đào Xuân Hùng</span>
              <span className="follow-block">
                <FaHeart className="heart-icon" />
                <span>Theo dõi</span>
              </span>
            </div>
            <div className="down">
              <table>
                <tr>
                  <th>SỐ NGƯỜI THEO DÕI</th>
                  <th>SỐ ĐƠN HOÀN THÀNH</th>
                  <th>TỶ LỆ HOÀN THÀNH</th>
                </tr>
                <tr>
                  <td>381 người</td>
                  <td>189 đơn</td>
                  <td>92.4%</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="concepts">
            <span className="concept-item">Kỷ yếu</span>
            <span className="concept-item">Sự kiện</span>
            <span className="concept-item">Chân dung</span>
            <span className="concept-item">Thời trang</span>
            <span className="concept-item">Khác</span>
          </div>
          <div className="description">
            <div className="title">Thông tin</div>
            <div className="content">
              Em sinh viên, vậy nên về nhiệt huyết và năng lượng không phải bàn
              ạ ^^. Ai cần cứ book, em sẽ hỗ trợ nhiệt tình, khum phải ngại
              nhaaa
            </div>
            <div className="products">
              <img src={img12} alt="product-image" />
              <img src={img13} alt="product-image" />
              <img src={img14} alt="product-image" />
              <img src={img15} alt="product-image" />
              <img src={img16} alt="product-image" />
            </div>
            <div className="content">
              Gear: Sony A7III - Sigma 24-70mm F/2.8
            </div>
            <div className="content">
              Tớ mà bận thì có thể liên hệ qua SĐT: 0384.699.437 để trao đổi nhé
            </div>
            <div className="content">
              Fb cá nhân:{" "}
              <span className="fb">https://www.facebook.com/masterchef</span>
            </div>
          </div>
          <div className="reviews">
            <div className="title">Đánh giá</div>
            <div className="review-item">
              <img src={img6} alt="avatar" />
              <div className="review">
                <div className="up">
                  <div className="left-area">
                    <div className="name">Bao Trung</div>
                    <div className="time">02:33:21 29/04/2025</div>
                  </div>
                  <div className="right-area">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="down">Nhiệt tình, tạo dáng tốt, good</div>
              </div>
            </div>

            <div className="review-item">
              <img src={img7} alt="avatar" />
              <div className="review">
                <div className="up">
                  <div className="left-area">
                    <div className="name">Bao Trung</div>
                    <div className="time">06:13:21 24/03/2025</div>
                  </div>
                  <div className="right-area">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="down">
                  Thiết bị đầy đủ, thân thiện, vote 5 sao
                </div>
              </div>
            </div>

            <div className="review-item">
              <img src={img8} alt="avatar" />
              <div className="review">
                <div className="up">
                  <div className="left-area">
                    <div className="name">Bao Trung</div>
                    <div className="time">08:14:21 17/03/2025</div>
                  </div>
                  <div className="right-area">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="down">Cũng dc</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inner-right">
            <div className="price">700,000đ/buổi</div>
            <div className="rate-line">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <div className="number-of-rate">75 Đánh giá</div>
            </div>
            <div className="button-area">
              <button className="rent-button">THUÊ</button>
              <button>TIP</button>
              <button className="chat-button">
                <IoChatbox />
                <span>CHAT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InforDetails;
