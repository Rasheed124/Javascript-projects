const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option

let editElement;

let editFlag = false;

let editId = "";





// ********* FUNCTIONS **************
const addItem = (e) => {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        // adding item to the list
        creatListItem(id, value);

        // display Alert
        displayAlert('item added to the list', 'success');

        container.classList.add('show-container');
        // add to local storage

        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault()

    } else if (value && editFlag) {

        editElement.innerHTML = value;

        displayAlert("item updated successfully", "success");

        editLocalStorage(editId, value)
        setBackToDefault();
    }
    else {
        displayAlert("please enter a value", "danger");
    }

}



const setUpItems = () => {
    let items = getLocalStorage();

    if (items.length > 0) {

        items.forEach(item => {
            creatListItem(item.id, item.value)
        });

        container.classList.add("show-container")

    }
}

// display alert
const displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

// clear items
const clearItems = () => {
    let items = document.querySelectorAll(".grocery-item");


    if (items > 0) {
        items.forEach(item => {
            list.removeChild(item)
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault()
    localStorage.removeItem('list')

}

// edit item
const editItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "Edit"

}

// remove item
const deleteItem = (e) => {

    const element = e.currentTarget.parentElement.parentElement;

    const id = element.dataset.id

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");

    setBackToDefault();

    // removeFromLocalStorage(id)

}


// ********* LOCAL STORAGE **************
const setBackToDefault = () => {
    grocery.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit"

}


// ********* EVENT LISTENERS **************

// submit form
form.addEventListener("submit", addItem)

clearBtn.addEventListener("click", clearItems)


window.addEventListener("DOMContentLoaded", setUpItems)

// ********* LOCAL STORAGE **************

// add
const addToLocalStorage = (id, value) => {
    const grocery = { id, value }
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items))
}

// remove
const removeFromLocalStorage = (id) => {
    let items = getLocalStorage();

    items = items.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    })

    localStorage.setItem("list", JSON.stringify(items))
}

const editLocalStorage = (id, value) => {
    let items = getLocalStorage();

    items = items.map(item => {
        if (item.id == id) {
            item.value = value;
        }
        return item;
    });

    localStorage.setItem("list", JSON.stringify(items))

}

const getLocalStorage = () => {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}


// LocalStorage Api
// setItem
// getItem
// save as strings

// localStorage.setItem("names", JSON.stringify(["items", "items2"]))

// const names = JSON.parse(localStorage.getItem("names"))
// console.log(names);


// ********* Setup Items **************

const creatListItem = (id, value) => {
    const element = document.createElement('article');
    element.classList.add("grocery-item")

    const attr = document.createAttribute('data-id');

    attr.value = id

    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
        <path d="M16 5l3 3"></path>
        </svg>
        </button>
        <button type="button" class="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
        </button>
    </div>`;

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener("click", deleteItem)
    editBtn.addEventListener("click", editItem)

    list.appendChild(element)
}