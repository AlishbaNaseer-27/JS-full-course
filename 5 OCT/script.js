document.getElementById('submitBtn').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const displayData = document.getElementById('displayData');

    if (inputField.value.trim() !== "") {
        // Create a new div to hold the submitted data
        const dataDiv = document.createElement('div');
        dataDiv.textContent = inputField.value;

        // Append the new div to the display area
        displayData.appendChild(dataDiv);

        // Clear the input field after submission
        inputField.value = '';
    } else {
        alert('Please enter something!');
    }
});
