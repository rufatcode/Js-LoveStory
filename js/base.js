export function CheckLocalStorage(dbName){
    if(localStorage.getItem(dbName)==null){
        localStorage.setItem(dbName,JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(dbName));
}
export function SetLocalStorage(data,dbName){
    localStorage.setItem(dbName,JSON.stringify(data));
}
 