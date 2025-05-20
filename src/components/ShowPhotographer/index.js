import graduation from "../../assets/images/graduation.png";
import lookbook from "../../assets/images/lookbook.png";
import event from "../../assets/images/event.png";
import scene from "../../assets/images/scene.png";
import anniversary from "../../assets/images/anniversary.png";
import furniture from "../../assets/images/furniture.png";
import lightpainting from "../../assets/images/lightpainting.png";
import portrait from "../../assets/images/portrait.png";
import "./ShowPhotographer.css";
import { MdSearch } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";
import img10 from "../../assets/images/10.jpg";
import img11 from "../../assets/images/11.jpg";
import { useNavigate } from "react-router-dom";

var ShowPhotographer = () => {
  const navigate = useNavigate();
  var openDetails = () => {
    navigate("/details");
  };

  return (
    <>
      <div className="show-photographer">
        <div className="search-area">
          <select className="select">
            <option>Giới tính</option>
            <option>Nam</option>
            <option>Nữ</option>
          </select>

          <select className="select">
            <option>Thể loại</option>
            <option>Kỷ yếu</option>
            <option>Chân dung</option>
            <option>Sự kiện</option>
            <option>Thời trang</option>
            <option>Nội thất</option>
            <option>Phong cảnh</option>
            <option>Họp lớp</option>
            <option>Vẽ ánh sáng</option>
          </select>

          <button className="range-price">Khoảng giá</button>

          <select className="select">
            <option>Chụp tại</option>
            <option>An Giang</option>
            <option>Bắc Kạn</option>
            <option>Bạc Liêu</option>
            <option>Bà Rịa – Vũng Tàu</option>
            <option>Hà Nội</option>
            <option>Hải Phòng</option>
            <option>Huế</option>
            <option>TP Hồ Chí Minh</option>
          </select>

          <input className="search-input" placeholder="Tìm tên thợ..." />

          <button className="search-button">
            <MdSearch />
            <span>Tìm kiếm</span>
          </button>
        </div>

        <div className="show-area">
          <div className="category">VIP Photographers</div>
          <div className="list-photographer">
            <div onClick={openDetails} className="item">
              <div className="image-area">
                <img src={img1} alt="avatar" />
                <div className="price">900,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Cấn Duy Bùi</div>
                <div className="description">Hết mình vì khách hàng ^^</div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={graduation} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={anniversary} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.7</div>
                    <div>{"(1256)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img2} alt="avatar" />
                <div className="price">400,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Nguyễn Mạnh Khang</div>
                <div className="description">Chụp cháy máy mới thôi nha :3</div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={furniture} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={portrait} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.5</div>
                    <div>{"(940)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img3} alt="avatar" />
                <div className="price">700,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Trịnh Trần Phương Hướng</div>
                <div className="description">
                  Chụp là phụ, ảnh đẹp là chính kk
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={anniversary} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={graduation} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.5</div>
                    <div>{"(903)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img4} alt="avatar" />
                <div className="price">500,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Lê Minh Trang</div>
                <div className="description">
                  Già, trẻ, gái, trái: ai ai cũng thích
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={lightpainting} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={furniture} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={portrait} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.2</div>
                    <div>{"(403)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img5} alt="avatar" />
                <div className="price">400,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Lê Diệu Anh</div>
                <div className="description">Giá rẻ nhưng trẻ nhân 2 ^^</div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={portrait} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={furniture} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.8</div>
                    <div>{"(96)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img6} alt="avatar" />
                <div className="price">850,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Đặng Đức Chiến</div>
                <div className="description">Ảnh xấu = free luôn</div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={anniversary} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.8</div>
                    <div>{"(15)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img7} alt="avatar" />
                <div className="price">1,000,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Đinh Xuân Hiền</div>
                <div className="description">
                  Đẳng cấp là mãi mãi, ảnh xấu là lâu lâu
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={anniversary} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={furniture} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.7</div>
                    <div>{"(74)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img8} alt="avatar" />
                <div className="price">700,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Đặng Ngọc Hùng</div>
                <div className="description">
                  Đừng vì 1 con sâu làm rầu nồi canh ^^
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lightpainting} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">3.9</div>
                    <div>{"(482)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img9} alt="avatar" />
                <div className="price">500,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Lê Quang Long</div>
                <div className="description">
                  Độc lập, tự do, hạnh phúc ;{">"}
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={furniture} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lightpainting} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">3.5</div>
                    <div>{"(97)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img10} alt="avatar" />
                <div className="price">600,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Lê Đức Việt</div>
                <div className="description">
                  Bắc Bling, vốn trọng chữ tình! ^^
                </div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={graduation} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={portrait} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">4.7</div>
                    <div>{"(12)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="image-area">
                <img src={img11} alt="avatar" />
                <div className="price">450,000đ/buổi</div>
              </div>

              <div className="infor">
                <div className="name">Nguyễn Bảo Khánh</div>
                <div className="description">Hết mình vì khách hàng ^^</div>
                <div className="bottom-item-block">
                  <div className="frequent-block">
                    <div className="outer-icon">
                      <img src={graduation} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={event} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={scene} alt="icon-game" />
                    </div>
                    <div className="outer-icon">
                      <img src={lookbook} alt="icon-game-more" />
                    </div>
                  </div>
                  <div className="rate-block">
                    <FaStar className="star-icon" />
                    <div className="rate-index">3.2</div>
                    <div>{"(84)"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPhotographer;
