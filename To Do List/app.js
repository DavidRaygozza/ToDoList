$(function(){
    let itemsNumber = 0;
    var elementToEdit;
    document.querySelector(".inputBox").focus();

        // dynamically creates a record based on the text imputted
    function createItem(text){
        document.querySelector(".inputBox").focus();
        if(text != ""){
            itemsNumber++;
            var htmlString = `<p id = 'itemName'>${text}</p>
                            <div class='switch'>
                                <button class='controlButtons editButton'>Edit</button>
                                <button class='controlButtons deleteButton'>Delete</button>
                            </div>`;
            const element = document.createElement("section");
            element.classList.add("item");
            element.innerHTML = htmlString;
            document.querySelector(".inputBox").value = "";

            // adds on click event listeners for edit & delete buttons of each record
            element.querySelector(".editButton").addEventListener("click", editItem);
            element.querySelector(".deleteButton").addEventListener("click", deleteItem);
            document.querySelector(".allItems").appendChild(element);
            element.scrollIntoView();
        }
        if(itemsNumber > 0){
            $(".itemsSection").css({"display": "flex"});
        }
    }

    function editItem(){
         // allows user to update a specific record
        document.querySelector(".inputBox").focus();
        document.querySelector(".inputBox").scrollIntoView();
        $(".submitEditButton").css({"display": "inline"});
        $(".submitButton").css({"display": "none"});
        elementToEdit = this.parentElement.previousElementSibling;
        document.querySelector(".inputBox").value = elementToEdit.textContent;
    }

    // submits changes to update a specific record
    function updateItem(){
        $(".submitEditButton").css({"display": "none"});
        $(".submitButton").css({"display": "inline"});
        var inputText = document.querySelector(".inputBox").value;
        elementToEdit.innerHTML = inputText;
        document.querySelector(".inputBox").value = "";
        elementToEdit.scrollIntoView();
    }

    // deletes a specific record
    function deleteItem(){
        itemsNumber--;
        this.parentElement.parentElement.remove();
        if(itemsNumber <= 0){
            $(".itemsSection").css({"display": "none"});
        }
        document.querySelector(".inputBox").value = "";
        document.querySelector(".inputBox").focus();
    }

    // deletes all records from the list
    function clearAllItems(){
        document.querySelector(".inputBox").value = "";
        document.querySelector(".allItems").innerHTML = "";
        itemsNumber = 0;
        $(".itemsSection").css({"display": "none"});
    }

    // onclick event listener for add. edit, & 'clear all' buttons
    $(".submitButton").on("click", function(){
        document.querySelector(".inputBox").focus();
        var inputText = document.querySelector(".inputBox").value;
        createItem(inputText);
    });

    $(".submitEditButton").on("click", function(){
        document.querySelector(".inputBox").focus();
        updateItem();
    });

     $(".clearAll").on("click", function(){
        document.querySelector(".inputBox").focus();
       clearAllItems();
     });
});