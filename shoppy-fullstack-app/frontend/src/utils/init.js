export function initForm(initArray){
    const refs = initArray.reduce((acc, cur) => {
        acc[cur] = "";
        return acc;
    }, {});
    return refs;
}
