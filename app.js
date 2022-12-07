window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-item-form');
    const input = document.querySelector('#new-item-input');
    const item_list = document.querySelector('#items');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const item = input.value;

        if(!item){
            alert("Please add an item");
            return;
        }

        const grocery_element = document.createElement("div");
        grocery_element.classList.add("item");


        const grocery_item_content_element = document.createElement("div");
        grocery_item_content_element.classList.add("content");


        const grocery_input_element = document.createElement("input");
        grocery_input_element.classList.add("text");
        grocery_input_element.type = "text";
        grocery_input_element.value = item;
        grocery_input_element.setAttribute("readonly", "readonly");


        grocery_item_content_element.appendChild(grocery_input_element);


        grocery_element.appendChild(grocery_item_content_element);


        const grocery_action_element = document.createElement("div");
        grocery_action_element.classList.add("actions");


        const grocery_item_edit_element = document.createElement("button");
        grocery_item_edit_element.classList.add("edit");
        grocery_item_edit_element.innerHTML = "Edit";


        const grocery_item_delete_element = document.createElement("button");
        grocery_item_delete_element.classList.add("delete");
        grocery_item_delete_element.innerHTML = "Delete";

        grocery_action_element.appendChild(grocery_item_edit_element);
        grocery_action_element.appendChild(grocery_item_delete_element);

        grocery_element.appendChild(grocery_action_element);

        item_list.appendChild(grocery_element);

        input.value = "";



        grocery_item_edit_element.addEventListener('click', ()=>{
            if(grocery_item_edit_element.innerText.toLowerCase() == "edit"){
                grocery_input_element.removeAttribute("readonly");
                grocery_input_element.focus();
                grocery_item_edit_element.innerText = "Save";
            }else{
                grocery_input_element.setAttribute("readonly", "readonly");
                grocery_item_edit_element.innerText = "Edit";
            }
        });

        grocery_item_delete_element.addEventListener('click', ()=>{
            item_list.removeChild(grocery_element);
        })
    })
})