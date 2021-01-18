
let timeoutID;
export const debounce = (task: Function, delay: number) =>{
    if(timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        task();
    }, delay);
}