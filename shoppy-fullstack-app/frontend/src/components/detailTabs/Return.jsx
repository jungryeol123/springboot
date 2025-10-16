import React from 'react';
import { useState,useEffect } from 'react';
import { axiosData } from '../../utils/dataFetch';

export function Return() {
    const [returnData,setReturnData] = useState({});
    useEffect(() => {
        const fetch = async() => {
        const jsonData = await axiosData("/data/productReturn.json");
        setReturnData(jsonData);
        }
        fetch();
    },{})
    console.log(returnData);
    
    return (
        <div className='review-top'>
            <div style={{paddingTop:"20px"}}></div>
            <h4>{returnData && returnData.title}</h4>
            <p>{returnData && returnData.description}</p>
            <table className='review-list-content'>
                <tbody>
                    <tr>
                        <td style={{width:"30%"}}>배송정보</td>
                        <td>
                            <ul style={{textAlign:"left"}}>
                                {returnData.deliveryInfo
                                 && returnData.deliveryInfo.map(item =>
                                    <li>{item}</li>
                                 )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:"30%"}}>취소/반품/교환 안내</td>
                        <td>
                            <ul style={{textAlign:"left"}}>
                                {returnData.returnInfo
                                 && returnData.returnInfo.map(item =>
                                    <li>{item}</li>
                                 )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:"30%"}}>반품/교환 불가능한 경우</td>
                        <td>
                            <ul style={{textAlign:"left"}}>
                                {returnData.returnNotInfo
                                 && returnData.returnNotInfo.map(item =>
                                    <li>{item}</li>
                                 )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:"30%"}}>A/S 안내</td>
                        <td>
                            <ul style={{textAlign:"left"}}>
                                {returnData.asInfo
                                 && returnData.asInfo.map(item =>
                                    <li>{item}</li>
                                 )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

