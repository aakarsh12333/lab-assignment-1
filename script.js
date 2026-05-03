
const addBtn = document.getElementById("addBtn");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearEvents");
const sampleBtn = document.getElementById("addSample");
const demoBox = document.getElementById("demoBox");


const titleInput = document.getElementById("text-event");
const dateInput = document.getElementById("date-event");
const categoryInput = document.getElementById("gender");
const descInput = document.getElementById("input-box");


function createEventCard(title, date, category, description) {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p> ${date}</p>
        <p> ${category}</p>
        <p>${description}</p>
        <button class="delete-btn">DELETE</button>
    `;

    eventList.appendChild(card);
}


addBtn.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const date = dateInput.value;
    const category = categoryInput.value;
    const description = descInput.value.trim();

    if (title === "" || date === "") {
        alert("Please fill required fields!");
        return;
    }

    createEventCard(title, date, category, description);

    
    titleInput.value = "";
    dateInput.value = "";
    descInput.value = "";
});


eventList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const card = e.target.closest(".event-card"); 
        card.remove();
    }
});


clearBtn.addEventListener("click", function () {
    eventList.innerHTML = "<p>No events yet. Add your first event!</p>";
});
