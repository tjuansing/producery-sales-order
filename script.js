function addItem() {
  const orderList = document.getElementById("orderList");

  const div = document.createElement("div");
  div.classList.add("order-item");

  div.innerHTML = `
      <div class="is-flex">
          <input class="input flex-grow" type="text" name="item[]" placeholder="Item Name" required />
          <input class="input qty-field" type="number" name="qty[]" min="1" value="1" required />
      </div>
      <div class="is-flex">
        <input class="input notes" type="text" name="notes[]" placeholder="Notes" />    
        <button type="button" class="button is-small is-danger qty-field" onclick="removeItem(this)">x</button>
      </div>
  `;

  orderList.appendChild(div);
}

function removeItem(button) {
  button.parentElement.parentElement.remove();
}

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get customer info
    const customerName = document.querySelector(
      "input[name='customerName']"
    ).value;
    const staffName = document.querySelector("input[name='staffName']").value;

    // Get all order items
    const items = [];
    document.querySelectorAll(".order-item").forEach((row) => {
      const itemName = row.querySelector("input[name='item[]']").value;
      const qty = row.querySelector("input[name='qty[]']").value;
      const notes = row.querySelector("input[name='notes[]']").value;

      if (itemName && qty) {
        // Ensure item and qty are filled
        items.push({ itemName, qty, notes });
      }
    });

    // Combine into an object
    const formData = {
      customerName,
      staffName,
      items,
    };

    console.log("Submitted Data:", formData); // Log data (Replace this with actual saving logic)

    // Clear the form
    document.getElementById("orderForm").reset();
    document.getElementById("orderList").innerHTML = ""; // Remove all added items
  });
