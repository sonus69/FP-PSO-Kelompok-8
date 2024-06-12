async function createItem() {
    const name = document.getElementById('create-name').value;
    const description = document.getElementById('create-description').value;

    const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });

    if (response.ok) {
        alert('Item created successfully');
        // Clear the input fields
        document.getElementById('create-name').value = '';
        document.getElementById('create-description').value = '';
        // Reload items to include the new item
        await getItems();
    } else {
        alert('Error creating item');
    }
}

async function getItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    const itemsTableBody = document.getElementById('items-table-body');

    itemsTableBody.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.dataset.id = item._id; // Store the ID in a data attribute
        row.innerHTML = `
                    <td style="width: 50px;">${index + 1}</td>
                    <td class="description-name-column" onclick="editCell(this)" data-original-value="${item.name}">${item.name}</td>
                    <td class="description-column" onclick="editCell(this)" data-original-value="${item.description}">${item.description}</td>
                    <td style="width: 100px;"><button class="btn btn-danger btn-sm" onclick="deleteItem('${item._id}')">Delete</button></td>
                `;
        row.addEventListener('click', selectItem);
        itemsTableBody.appendChild(row);
    });
}

async function updateItem(id, name, description) {
    const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });

    if (response.ok) {
        alert('Item updated successfully');
        await getItems();
    } else {
        alert('Error updating item');
    }
}

async function deleteItem(id) {
    const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('Item deleted successfully');
        await getItems();
    } else {
        alert('Error deleting item');
    }
}

// Function to select an item
function selectItem(event) {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');
}

function editCell(cell) {
    if (!cell.querySelector('input')) {
        const value = cell.innerText;
        const originalValue = cell.dataset.originalValue;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = value;
        input.classList.add('form-control');

        // Event listener untuk memproses Enter key press
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                input.blur(); // Pemicu blur event
            }
        });

        input.onblur = () => {
            const newValue = input.value.trim();
            if (newValue === '') {
                if (originalValue.trim() === '') {
                    cell.innerText = '';
                } else {
                    cell.innerText = originalValue;
                }
            } else {
                cell.innerText = newValue;
            }

            // Jika nilai baru berbeda dari nilai asli, perbarui item
            if (newValue !== originalValue) {
                const row = cell.parentElement;
                const id = row.dataset.id;
                const name = row.cells[1].innerText;
                const description = row.cells[2].innerText;
                updateItem(id, name, description);
            }
        };

        cell.innerText = '';
        cell.appendChild(input);
        input.focus();
    }
}
window.onload = () => {
    getItems();
};