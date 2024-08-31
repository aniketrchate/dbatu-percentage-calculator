// Function to convert CGPA to percentage
function convertCGPA() {
    const cgpaInput = document.getElementById('cgpaInput').value.trim();
    const resultBox = document.getElementById('cgpaResult');
    const cgpaValue = parseFloat(cgpaInput);

    // Check if input is empty or the input is a valid number
    if (cgpaInput === '' || isNaN(cgpaValue)) {
        alert("Value cannot be empty or Invalid input.");
        resultBox.style.display = 'none'; 
        return;
    }
    // Validate CGPA value range
    if (cgpaValue < 0 || cgpaValue > 10) {
        alert("Please enter a CGPA value between 0 and 10.");
        resultBox.style.display = 'none'; 
        return;
    }

    const cgpaResult = (cgpaValue - 0.5) * 10;
    
    resultBox.innerHTML = `<p style="font-size: 1.2rem;">Percentage: ${cgpaResult.toFixed(2)}%</p>`;
    resultBox.style.display = 'block'; 
}

// Function to clear the result box
function clearResult() {
    const resultBox = document.getElementById('cgpaResult');
    resultBox.style.display = 'none'; 
}