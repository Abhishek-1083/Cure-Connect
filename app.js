// Mock API for fetching doctors based on symptoms
const doctorsData = [
    { name: "Dr. Aditi Sharma", specialty: "Cardiologist", symptom: "chest pain", image: "aditi.jpeg" },
    { name: "Dr. Rahul Verma", specialty: "Cardiologist", image: "rahul.jpeg" },
    { name: "Dr. Priya Singh", specialty: "Cardiologist", image: "priya.jpeg" },
    { name: "Dr. Vikram Gupta", specialty: "Cardiologist", image: "vikram.jpeg" },
  ];
  
  // Handling symptom form submission
  document.getElementById('symptom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const symptom = document.getElementById('symptom-input').value;
    if (symptom.trim()) {
      displayDoctors();
    } else {
      alert('Please enter a symptom');
    }
  });
  
  function displayDoctors() {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = ''; // Clear existing list
  
    doctorsData.forEach((doctor) => {
      const doctorCard = document.createElement('div');
      doctorCard.classList.add('doctor-card');
  
      doctorCard.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>Specialty: ${doctor.specialty}</p>
        <button class="btn-primary" onclick="openModal()">Book Appointment</button>
      `;
  
      doctorList.appendChild(doctorCard);
    });
  }
  
  // Modal functionality
  const modal = document.getElementById('appointment-modal');
  const closeModalBtn = document.querySelector('.close-btn');
  
  function openModal() {
    modal.classList.remove('hidden');
  }
  
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  
  document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment booked successfully!');
    modal.classList.add('hidden');
  });

  // Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}