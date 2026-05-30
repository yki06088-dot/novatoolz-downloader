// Download ခလုတ်
document.getElementById('downloadBtn').onclick = function() {
    alert("ဒေါင်းလုပ်ဆွဲခြင်းကို စတင်လိုက်ပါပြီ...");
    window.location.href = "https://your-download-link.com";
};

// ပုံကို နှိပ်လျှင် ပွင့်ခြင်း
function openModal(imgSrc) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("fullImg").src = imgSrc;
}

// ပုံကို ပြန်ပိတ်ခြင်း
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
