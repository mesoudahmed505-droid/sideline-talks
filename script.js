// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-9d5X1HSB5ktvu4O4pWNyq401HrHxaQ",
  authDomain: "sideline-talks.firebaseapp.com",
  projectId: "sideline-talks",
  storageBucket: "sideline-talks.firebasestorage.app",
  messagingSenderId: "851953628657",
  appId: "1:851953628657:web:adbc00af1a1351878ec050",
  measurementId: "G-MENSQW55S4"
};

// Initialize Firebase safely
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Fetch Latest News from Firestore
function loadNews() {
    const newsFeed = document.getElementById("newsFeed");
    if (!newsFeed) return;

    db.collection("news").onSnapshot((snapshot) => {
        if (snapshot.empty) {
            newsFeed.innerHTML = "<p class='loading-msg'>ምንም የተለቀቀ ዜና አልተገኘም። እባክዎን ከ Admin Panel ይልቀቁ!</p>";
            return;
        }

        let htmlContent = "";
        snapshot.forEach((doc) => {
            const data = doc.data();
            const fallbackImg = 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500';
            
            htmlContent += `
                <article class="news-card">
                    <div class="card-img">
                        <img src="${data.imageUrl && data.imageUrl.trim() !== '' ? data.imageUrl : fallbackImg}" alt="News Image" onerror="this.src='${fallbackImg}'">
                        <span class="category">${data.category || 'General'}</span>
                    </div>
                    <div class="card-body">
                        <h4>${data.title || 'Untitled'}</h4>
                        <p>${data.content || ''}</p>
                        <div class="meta-info">
                            <span><i class="fa-regular fa-clock"></i> ${data.time || 'Recently'}</span>
                        </div>
                    </div>
                </article>
            `;
        });

        newsFeed.innerHTML = htmlContent;
    }, (error) => {
        console.error("Error fetching news: ", error);
        newsFeed.innerHTML = "<p class='loading-msg' style='color:red;'>ዜናዎችን መጫን አልተቻለም። እባክዎን የ Firebase Rules ማስተካከልዎን ያረጋግጡ!</p>";
    });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadNews();
});
