import './styles/cgvSignup.css'
import './styles/cgv.css'
import './styles/shoppy.css'
import './styles/commons.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Products } from './pages/Products.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Home } from './pages/Home.jsx';
import { Layout } from './pages/Layout.jsx'
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import { CheckoutInfo } from './pages/CheckoutInfo.jsx'
import { Support } from './pages/Support.jsx'
import { CartProvider } from './context/CartContext.js';
import { AuthProvider } from './context/AuthContext.js';
import { ProtectedPageRoute } from './pages/ProtectedPageRoute.js';
import { ProductProvider } from './context/ProductContext.js';
import { FindUsername } from './pages/FindUserId.jsx';


export default function App() {
  // //1. 장바구니 수량 관리 : setCartCount
  // const [cartCount,setCartCount] = useState(0);

  // //2. 장바구니 아이템 관리
  // const [cartItems,setCartItems] = useState([]);
  // const [cartItem,setCartItem] = useState(0);
  // // const addCart = (cartItem) => {
  // //   //pid, size가 동일한 경우 qty증가, cartItems 없는 경우 새로 추가
  // //   // setCartItems([...cartItems, cartItem]);
  // //   setCartItems(cartItemsCheck(cartItems,cartItem))
  // //   setCartCount(cartCount + 1);
  // // }
  // const updateCart = (cid,type) => {
  //   if(type === undefined){
  //      const findItem = cartItems.find(item => item.cid === cid);
  //       setCartCount(cartCount - findItem.qty);
        
  //       setCartItems((cartItems) => {
  //           return cartItems.filter(item => !(item.cid === cid));
  //       });
  //   } else {
  //   setCartItems(updateCartItemsQty(cartItems,cid,type));
  //   type === "+" ? setCartCount(cartCount+1)
  //                : cartCount > 1 ? setCartCount(cartCount-1) : setCartCount(cartCount);
  //   }
  // }
  // // console.log(cartItems);
  
  
  return (
    
    <AuthProvider>
    <ProductProvider>
    <CartProvider >
    <BrowserRouter>
      <Routes>

        <Route path='/' element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/all' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/find-username" element={<FindUsername />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<ProtectedPageRoute>
                                          <Cart />
                                       </ProtectedPageRoute>}/>
          <Route path='/products/:pid' element={<ProductDetail />}/>
          <Route path='/checkout' element={<ProtectedPageRoute><CheckoutInfo /></ProtectedPageRoute>} />
          <Route path='/support' element={<ProtectedPageRoute>
                                            <Support />
                                          </ProtectedPageRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider >
    </ProductProvider>
    </AuthProvider>
  
  );
}


