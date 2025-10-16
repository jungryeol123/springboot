import { login,logout } from "./authSlice.js";
import { validateFormCheck } from "../../utils/validate.js";
import { axiosPost } from "../../utils/dataFetch.js";

export const getLogin = (formData, param) => async(dispatch) => {
//        console.log(formData.id, param);
 if(validateFormCheck(param)) {

    /**
        springboot - @RestController, @PostMapping("/member/login")
        axios API (**fetch = body, axios = data)
    */
    const url = "http://localhost:8080/member/login";
    const result = await axiosPost(url,formData);

    if(result){
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