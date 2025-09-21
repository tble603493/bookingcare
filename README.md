# BookingCare Project

The **BookingCare** project is an online medical appointment booking system.  
It allows patients to search for doctors and book appointments, while doctors and administrators can manage schedules effectively.  
The application is built with **Frontend: ReactJS** and **Backend: NodeJS + ExpressJS**, using **MySQL** as the database.

---

## 🚀 Installation and Running Guide

### 1. Clone the repository

```bash
git clone https://github.com/tble603493/bookingcare.git
cd bookingcare
```

### 2. Setup Backend

```bash
cd booking-care-backend
npm install
```

Create a `.env` file inside the `booking-care-backend` directory with the following configuration (adjust values as needed):

```
PORT=8081
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bookingcare
```

If there is an SQL dump included (e.g. `bookingcare.sql`) import it into MySQL:

```bash
# create database (if not exists)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS bookingcare CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# import SQL file
mysql -u root -p bookingcare < path/to/bookingcare.sql
```

Run the backend server:

```bash
npm start
```

By default, the backend will run at:  
👉 `http://localhost:8081`

---

### 3. Setup Frontend

```bash
cd ../frontend-bookingcare
npm install
```

(Optional) If the frontend requires an environment variable for the backend URL, create `.env` in `frontend-bookingcare`:

```
REACT_APP_API_URL=http://localhost:8081
```

Run the frontend:

```bash
npm start
```

By default, the frontend will run at:  
👉 `http://localhost:3000`

---

## 🛠 Technologies Used

-   **Frontend**: React.js, Redux, SCSS
-   **Backend**: Node.js, Express.js
-   **Database**: MySQL
-   **Others**: RESTful API, JWT Authentication

---

## 📌 Main Features

-   Online appointment booking by specialty/doctor
-   Schedule management for patients and doctors
-   User-friendly interface with multi-language support

---

## 🧰 Troubleshooting / Notes

-   Make sure MySQL is running and your `.env` credentials match your MySQL user.
-   If `npm start` fails, check `package.json` scripts in each folder (some projects use `npm run dev` or `nodemon`).
-   If the frontend cannot reach the backend, confirm `REACT_APP_API_URL` (or equivalent) is set and frontend is restarted after editing `.env`.

---

## 👨‍💻 Author

Developed by [tble603493](https://github.com/tble603493)
