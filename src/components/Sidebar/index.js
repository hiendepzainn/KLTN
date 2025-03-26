import graduation from "../../assets/images/graduation.png";
import lookbook from "../../assets/images/lookbook.png";
import event from "../../assets/images/event.png";
import scene from "../../assets/images/scene.png";
import more from "../../assets/images/more.png";
import anniversary from "../../assets/images/anniversary.png";
import furniture from "../../assets/images/furniture.png";
import lightpainting from "../../assets/images/lightpainting.png";
import portrait from "../../assets/images/portrait.png";
import "./Sidebar.css";

var Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="category-title">Thể loại chụp</div>
        <div className="category-list">
          <div className="item">
            <div className="image-icon">
              <img src={graduation} alt="category" />
            </div>
            <div className="name">Kỷ yếu</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={portrait} alt="category" />
            </div>
            <div className="name">Chân dung</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={event} alt="category" />
            </div>
            <div className="name">Sự kiện</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={lookbook} alt="category" />
            </div>
            <div className="name">Thời trang</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={furniture} alt="category" />
            </div>
            <div className="name">Nội thất</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={scene} alt="category" />
            </div>
            <div className="name">Phong cảnh</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={anniversary} alt="category" />
            </div>
            <div className="name">Họp lớp</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={lightpainting} alt="category" />
            </div>
            <div className="name">Vẽ ánh sáng</div>
          </div>

          <div className="item">
            <div className="image-icon">
              <img src={more} alt="category" />
            </div>
            <div className="name">Khác</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
