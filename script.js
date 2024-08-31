// Function to convert CGPA to percentage
function convertCGPA() {
    const cgpaInput = document.getElementById('cgpaInput').value.trim();
    const resultBox = document.getElementById('cgpaResult');
    
    const cgpaValue = parseFloat(cgpaInput);
    const cgpaResult = (cgpaValue - 0.5) * 10;
    
    resultBox.innerHTML = `<p style="font-size: 1.2rem;">Percentage: ${cgpaResult.toFixed(2)}%</p>`;
    resultBox.style.display = 'block'; 
}