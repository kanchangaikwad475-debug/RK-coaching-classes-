import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBo3O1mC0o8eJ1SurrGiKnTTzXdHMDXzxw",
  authDomain: "rk-coaching-class-ef99b.firebaseapp.com",
  projectId: "rk-coaching-class-ef99b",
  storageBucket: "rk-coaching-class-ef99b.firebasestorage.app",
  messagingSenderId: "845394724565",
  appId: "1:845394724565:web:746c9253b5fe4b4d1a445c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Back to Top Button

let topButton = document.getElementById("topBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
const form = document.getElementById("admissionForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  try {
    await addDoc(collection(db, "admissions"), {
      name,
      mobile,
      email,
      course,
      createdAt: new Date()
    });

    alert("Admission submitted successfully!");
    form.reset();
  } catch (error) {
    alert("Error: " + error.message);
  }
});
