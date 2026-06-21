function sendWithRegularAlert(event) {
    // 1. Stop the form from doing its default submit action (which refreshes the current page)
    event.preventDefault(); 
    
    // 2. Show your notification pop-up
    alert("Data Anda sedang diproses! Klik OK untuk kembali ke beranda.");
    
    // 3. Send the user straight back to the homepage
    window.location.href = "index.html"; 
}