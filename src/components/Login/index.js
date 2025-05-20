import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/find.png";
import "./Login.css";

var Login = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  var switchToHomepage = () => {
    Swal.fire({
      title: "Đăng nhập thành công!",
      text: "",
      icon: "success",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
    // navigate("/");
    // alert("Login Success!");
  };

  var switchToRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <div className="login">
        <div className="login-card">
          <div className="app-infor">
            <img src={logo} alt="logo" />
            <div className="name">Find Orange</div>
          </div>
          <div className="input">
            <input placeholder="Tên đăng nhập hoặc email" />
            <br />
            <input type="password" placeholder="Mật khẩu" />
            <div className="forget-password">
              <span>Quên mật khẩu</span>
            </div>
          </div>
          <button onClick={switchToHomepage}>Đăng nhập</button>
          <div className="register-tag">
            <span onClick={switchToRegister}>Đăng ký tài khoản</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
