import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js"; 
import { useAuth } from "../../hooks/useAuth.js";
import { useSelector,useDispatch } from "react-redux";
import { getLogout } from "../../feature/auth/authAPI.js";


export function Header() {
    // const { handleLogout } = useAuth();
    // const { isLogin } = useContext(AuthContext);
    // const { cartCount } = useContext(CartContext);
    // console.log("Header:::cartList-->",cartList);
    // const cartList = useSelector((state) => state.cart.cartList);

    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cartCount);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const navigate = useNavigate();

    const handleLogout = () => {
        const succ = dispatch(getLogout());
        const loginInfo = localStorage.getItem("loginInfo");
        if(succ && loginInfo === null) alert("로그아웃 되었습니다.");
        navigate("/");
    }
    

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-redux(toolkit)</span>
                </Link>
            <nav className="header-right">
                <Link to="/all">Products</Link>
                <Link to="/cart">MyCart({cartCount})</Link>
                {!isLogin &&
                <Link to="/login"><button type="button">로그인</button></Link>
                }
                {isLogin &&
                    <button type="button"
                            onClick={ handleLogout }>로그아웃</button>
                }
                <Link to="/signup">
                    <button type="button">회원가입</button>
                </Link>
                { isLogin &&
                <Link to="/support">
                    <button type="button">고객센터</button>
                </Link>
                }

                
            </nav>
            </div>
        </div>
    );
}