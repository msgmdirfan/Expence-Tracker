
const categories = [];
let totalExpense = 0;


function addCategory() {
    const categoryInput = document.getElementById("newCategory").value.trim();

    if (!categoryInput) {
        alert("Please enter a category.")
        return;
    }

  
    if (categories.includes(categoryInput)) {
        alert("This category already exists.");
        return;
    }
  
    categories.push(categoryInput);
    const categoryDropdown = document.getElementById("category");
    const option = document.createElement("option");
    option.value = categoryInput;
    option.textContent = categoryInput;
    categoryDropdown.appendChild(option);
    document.getElementById("categoryForm").reset();
    alert("Category added successfully.");
}

function addExpense() {
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const amount = parseInt(document.getElementById("amount").value.trim());
    const date = new Date().toLocaleDateString();

    if (!category || !description || isNaN(amount) || amount <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }
    const tableBody = document.getElementById("historyTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = category;
    newRow.insertCell(1).textContent = description;
    newRow.insertCell(2).textContent = date;
    newRow.insertCell(3).textContent = amount;
    totalExpense += amount;

    document.getElementById("expenseForm").reset();
    alert("Expense added successfully.");
}

function calculateTotal() {
    document.getElementById("totalExpense").textContent = totalExpense;
    alert(`Total Expense: ${totalExpense.toFixed(2)}`);
}


function resetAll() {
    
    categories.length = 0;
    const categoryDropdown = document.getElementById("category");
    categoryDropdown.innerHTML = `<option value="" disabled selected>Select a category</option>`;
    const tableBody = document.getElementById("historyTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    totalExpense = 0;
    document.getElementById("totalExpense").textContent = "0";
    alert("All data has been reset.");
}
