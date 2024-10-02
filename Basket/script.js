let addComputer = document.getElementById("addComputer");
let table = document.querySelector(".table");

// Загрузка данных из локального хранилища при загрузке страницы
window.addEventListener("DOMContentLoaded", (event) => {
    loadComputers();
});

addComputer.addEventListener("click", function() {
    let category = document.getElementById("category").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let isNew = document.getElementById("isNew").value;
    let image = document.getElementById("image").value;
    let ram = document.getElementById("ram").value;
    let processor = document.getElementById("processor").value;
    let storage = document.getElementById("storage").value;
    let storageType = document.getElementById("storageType").value;
    let os = document.getElementById("os").value;
    let videoCard = document.getElementById("videoCard").value;

    let newItem = {
        category,
        name,
        price,
        description,
        isNew,
        image,
        ram,
        processor,
        storage,
        storageType,
        os,
        videoCard
    };

    // Сохранение данных в локальное хранилище
    saveComputer(newItem);

    // Обновление таблицы
    addTableRow(newItem);
})

function saveComputer(computer) {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.push(computer);
    localStorage.setItem("computers", JSON.stringify(computers));
}

function loadComputers() {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.forEach((computer, index) => addTableRow(computer, index));
}

function addTableRow(computer, index) {
    let newItem = `
    <tbody>
            <th scope="col">
                <p>${computer.category}</p>
            </th>
            <th scope="col">
                <p>${computer.name}</p>
            </th>
            <th scope="col">
                <img class="tableImage" src="${computer.image}" alt="">
            </th>
            <th scope="col">
                <p style="color: red;">${computer.price}</p>
            </th>
            <th scope="col">
                <button class="bg-danger btns22 removeBtn">Sil</button>
                <button id="saveChanges" class="bg-primary btns2">Redakt Ele</button>
            </th>
          </tr>
        </tbody>
    `;
    table.innerHTML += newItem;
}



// Event delegation for dynamically added .tableImage elements
table.addEventListener("click", function(e) {
    if (e.target.classList.contains("tableImage")) {
        let imageSrc = e.target.src;
        let modal = `
        <div class="modal-dialog d-flex align-items-center justify-content-center my-5">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <img src="${imageSrc}" alt="Picture is not the download">
                </div>
            </div>
        </div>
        `;

        document.querySelector(".modal2").innerHTML = modal;
        new bootstrap.Modal(document.querySelector(".modal2")).show();
    }

    

    // Удаление карточки при нажатии на кнопку "Sil"
    if (e.target.classList.contains("removeBtn")) {
        let row = e.target.closest("tr");
        let index = row.dataset.index;

        // Удаление данных из локального хранилища
        removeComputer(index);

        // Удаление строки из DOM
        row.remove();
    }
})

function removeComputer(index) {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.splice(index, 1); // Удаляем элемент по индексу
    localStorage.setItem("computers", JSON.stringify(computers)); // Обновляем локальное хранилище
}

document.getElementById("image").addEventListener("input", function() {
    let imageSrc = this.value;
    document.getElementById("imagePreview").src = imageSrc;
})

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("category").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    document.getElementById("description").value = '';
    document.getElementById("isNew").value = '';
    document.getElementById("image").value = ''
    document.getElementById("imagePreview").src = ''
    document.getElementById("ram").value = '';
    document.getElementById("processor").value = '';
    document.getElementById("storage").value = '';
    document.getElementById("storageType").value = '';
    document.getElementById("os").value = '';
    document.getElementById("videoCard").value = '';
}) 




