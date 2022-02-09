import _ from 'lodash';
import './style.css';

function clearDom() {
    const container = document.querySelector(".info .container")

    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

function addTask() {
    
}
const button = document.querySelector('.add-task');

button.onclick = () => {
    console.log(changeDom())
}
addTask()