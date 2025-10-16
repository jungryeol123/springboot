import React, { useEffect, useState } from 'react';
import { axiosData } from '../../utils/dataFetch';

export function QnA() {
    const [qnaData,setQnAData] = useState([]);
    const [openQid,setOpenQid] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    useEffect(() => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/productQnA.json");
            setQnAData(jsonData);
        }
        fetch();
    },[])
    const handleToggle = (qid) => {
        setOpenQid(prev => (prev === qid) ? null : qid);
    }
    const handleToggleButton = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div style={{paddingTop : "20px"}}>
                {isOpen &&
                <button type='button' 
                        style={{backgroundColor:"green"}}
                        onClick={handleToggleButton}
                        >상품 문의</button>
                }
                {!isOpen &&
                <button type='button' 
                        style={{backgroundColor:"coral"}}
                        onClick={handleToggleButton}
                        >상품 문의</button>
                }
                {!isOpen && <span>버튼이 코랄색 입니다.</span>}
            </div>
            <table className='review-list-content'>
                <tbody >
                    {qnaData && qnaData.map(item =>
                    <tr style={{paddingTop:"10px"}}>
                        <td style={{width:"10%"}}><span>{item.isComplete && item.isComplete ? "답변완료":"답변준비중"}</span></td>
                        <td style={{width:"70%"}}><span style={{cursor:"pointer"}} 
                                onClick={()=>{handleToggle(item.qid)}}>{item.title}</span>
                                {openQid === item.qid && <span>{item.content}</span>}
                                <span>{item.isLock && item.isLock ? "  🔒":""}</span>
                                </td>
                        {/* <td style={{width:"60%"}}> </td> */}
                        <td style={{width:"15%"}}>{item.id}</td>
                        <td>{item.cdate }</td>
                    </tr>
                    )}
                    <tr>
                        <td  colSpan={4}>{"<<"} 1 2 3 4 5 {">>"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


