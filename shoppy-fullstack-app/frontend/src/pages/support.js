//DOM 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리 
window.addEventListener('DOMContentLoaded', function() {
    createTable('all');
    filterMenuEvent();
});//window.addEventListener

async function filterMenuEvent(type) {
    
    let menuList = document.querySelectorAll(".fliter-menu a");

    //처음 호출 시 버튼 색상
    menuList.forEach(menu => {
        if(menu.id === 'all'){
            menu.style.background = "rgb(251, 67, 87)";
        } else {
            menu.style.background = "rgb(137, 137, 135)";
        }
    });

    menuList.forEach((menu) => {
        menu.addEventListener('click',() => {
            //전체메뉴를 기본색으로 초기화
            menuList.forEach(menu => menu.style.background = "rgb(137, 137, 135)" );
            menu.style.background = "rgb(251, 67, 87)";
            createTable(menu.id);
        });
    });
}

async function filterData(type) {
    let list = await getData();
    let filterList = list.filter((item) => item.type === type);
    console.log(filterList);
    // createTable(filterList);
    return filterList;
}

async function getData() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable(type) { //list는 array type
    let list = null;
    if(type === 'all'){
    list = await getData();
    } else {
        list = await filterData(type);
    }
    let output = `
     <table class = "stable">
        <thead>
            <tr>
                <th>번호</th>
                <th>구분</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
        </thead>
            <tbody>
            ${list.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>[${item.type}]</td>
                    <td><a href="#">${item.title}</a></td>
                    <td>${item.rdate}</td>
                    <td>${item.hits}</td>
                </tr>

            `).join("")}
            
            </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">1 2 3 4 5 >> </td>
                        </tr>
                    </tfoot>
    </table>
    `;
    document.querySelector(".stable")?.remove();
    document.querySelector("#before-table").insertAdjacentHTML('afterend',output);
}
