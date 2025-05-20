import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/find.png";
import "./Register.css";

var Register = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  var switchToLogin = () => {
    navigate("/login");
  };

  var registerSuccess = () => {
    // alert("Đăng ký thành công!");
    Swal.fire({
      title: "Đăng ký thành công!",
      text: "",
      icon: "success",
    });
    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="register">
          <div className="register-card">
            <div className="app-infor">
              <img src={logo} alt="logo" />
              <div className="name">Find Orange</div>
            </div>
            <div className="input">
              <input placeholder="Tên đăng nhập" />
              <br />
              <input type="password" placeholder="Mật khẩu" />
              <br />
              <input type="password" placeholder="Nhập lại mật khẩu" />
              <br />
              <input placeholder="Email" />
              <br />
              {/* <div className="capacity">
                <input
                  placeholder="Người book/Thợ chụp"
                  className="display-capacity"
                />
                <div className="choose">
                  <span>Chọn tư cách</span>
                </div>
              </div> */}
            </div>
            <button onClick={registerSuccess}>Đăng ký tài khoản</button>
            <div className="more-options">
              <span onClick={switchToLogin}>Đăng nhập</span>
              <span>Quên mật khẩu</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
