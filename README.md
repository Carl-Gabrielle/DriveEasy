# DriveEasy – Driving School Management System

**Drive Easy** 
---

## 🚀 Features

- Full-stack SPA powered by Laravel + Inertia.js + React  
- Student registration and course enrollment  
- Admin dashboard for student approval and scheduling  
- Instructor dashboard with assigned students, evaluations, and calendar view  
- Student portal to view schedule, performance ratings, and results  
- Certificate download for passed students  
- Access to learning materials for students who need improvement  
- Admin panel to upload and manage PDFs and YouTube video materials  
- Responsive design using Tailwind CSS 

---

## 🧰 Tech Stack

- **Backend:** Laravel 12
- **Frontend:** React.js (via Inertia.js)
- **Styling:** Tailwind CSS
- **PDF Generation:** [barryvdh/laravel-dompdf](https://github.com/barryvdh/laravel-dompdf)

---

## ⚙️ Installation & Setup

Follow the steps below to set up the project locally:

### 1. Clone the Repository

git clone <your-repo-link>
<br>
cd driveeasy

### 2.Install PHP Dependencies
composer install

### 3.Rename .env.example to .env 
cp .env.example .env

### 4. Run this to your terminal 
php artisan  key:generate
<br>
php artisan migrate --seed

### 5. Install JS Dependencies 
npm install 
<br>
npm install react-icons 

### 6. Install and Configure DomPDF
composer require barryvdh/laravel-dompdf
<br>
php artisan vendor:publish --provider="Barryvdh\DomPDF\ServiceProvider"

### 7. Install and Configure DomPDF
php artisan serve
<br>
npm run dev 







