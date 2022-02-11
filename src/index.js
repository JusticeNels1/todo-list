import _ from 'lodash';
import './style.css';
import {tasks} from './task';
import changeDom from './changeDom';


const button = changeDom.createaddButton() 

changeDom.task_modal.appendChild(button) 
document.querySelector('.add-task');


button.onclick = () => {
    button.remove();
    
    changeDom.createTaskModal();
}


 