import { newTask, tasks } from "./task";
function append (container) {
    let arr = [...arguments];

    for (let i = 1; i < arr.length; i++) {
        const ele = arr[i];
        container.append(ele)
    }
}
const changeDom = (() => {
    const container = document.querySelector(".info .container")
    const task_modal = document.querySelector('.task-details');

    function createTaskModal () {
        const textbox = taskInput();
        const add_input = document.createElement('button');
        const clear_input = document.createElement('button');
        
        add_input.addEventListener('click', e => {
            populateContainer(container,newTask(textbox.value));
            clearContainer(task_modal);
            task_modal.appendChild(createaddButton());
        })

        clear_input.addEventListener('click', e => {
            clearContainer(task_modal);
            task_modal.appendChild(createaddButton());
        })

        add_input.classList.add('add')
        clear_input.classList.add('clear')

        add_input.innerText = "add"
        clear_input.innerText = "clear"
        
        append(task_modal,textbox,add_input,clear_input);//first arg is container remaining are children to be appended
        
    }
    
    const createaddButton = (button) => {
        button = document.createElement('button')
        button.innerText = 'addText'
        button.onclick = () => {
            button.remove();
            
            changeDom.createTaskModal();
            console.log(tasks)

        }
        return button;
    }
    
    function taskInput () {
        const textbox = document.createElement('input');
        textbox.setAttribute('type','text');
    
        return textbox;
    }

    function clearContainer(container) {

        while(container.firstChild) {
            container.removeChild(container.lastChild)
        }
    }

    function populateContainer(container,ele) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerText = ele.details;
        container.appendChild(task);
    }

    return {
        createTaskModal,
        clearContainer,
        populateContainer,
        createaddButton,
        task_modal,
    }
})();


export default changeDom