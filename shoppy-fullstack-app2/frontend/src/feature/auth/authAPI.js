import { login,logout } from "./authSlice.js";
import { validateFormCheck } from "../../utils/validate.js";

export const getLogin = (formData, param) => (dispatch) => {
        console.log(formData.id, param);
 if(validateFormCheck(param)) {              
    if("test" === formData.id && "1234" === formData.pwd){
               //로그인 성공
               dispatch(login({"useId":formData.id}));
               return true;
            }
        }
        return false;
}
export const getLogout = () => async (dispatch) => {
    dispatch(logout());
    return true;
}