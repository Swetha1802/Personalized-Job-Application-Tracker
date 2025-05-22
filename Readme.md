# Job Application Platform  

The Job Tracker Application is a comprehensive web-based platform designed to assist job seekers in managing their job search process. By connecting to external job platforms like LinkedIn, Glassdoor, and Indeed, the application provides real-time job listings based on the user's search keywords.

Our platform helps users track applications, analyze performance metrics from various job sites, and streamline the entire job search journey with features such as:

- Real-time job listings from multiple platforms  
- Application status tracking  
- Performance analytics dashboard  
- Direct application capabilities  

---

Vercel App Link - https://job-portal-peach-zeta.vercel.app/

## 🎬 Video Demonstration

[![Demo Video](https://github.com/Swetha1802/Personalized-Job-Application-Tracker/blob/main/client/src/images/thumbnail-wd.png)](https://youtu.be/BdAjbZpp2os)

---

## 📁 Project Structure

This project consists of two main parts:

### Backend (API)
- Built with Node.js  
- Database schema defined with Prisma  
- Environment configuration via `.env` file  

### Frontend (Client)
- React-based application  
- User authentication system  
- Job listings functionality  
- Dashboard interface  

---

## ⚙️ Configuration

1. Set up your environment variables:
   - Copy the example `.env` file in the api directory  
   - Update with your database connection string and other configuration  

---

## 🚀 Running the Application

1. Start the backend server:
   ```bash
   cd api
   npm start
   ```

2. Start the frontend application:
   ```bash
   cd client
   npm start
   ```

---

## 🛠 Technology Stack

### Frontend
- React  
- React Router  
- CSS  

### Backend
- Node.js  
- Prisma ORM  

---

## 🔐 Features

### User Authentication System
- **Sign Up**: New users can create accounts by providing:
  - First name and last name  
  - Email address (with validation)  
  - Secure password (with strength requirements)  
  - Date of birth (with age verification)  
- **Login**: Secure login for returning users  
- **Authentication Context**: Maintains user session using React Context API  
- **Protected Routes**: Restricted access to authenticated users only  
- **Form Validation**: Ensures data integrity on client side  

### Job Listings
- **Browse Jobs**: View available job positions  
- **Search Functionality**: Filter jobs based on keywords  
- **Apply Mechanism**: Direct application to positions  

### Dashboard Interface
- **User Profile**: View user info on dashboard  
- **Application Tracking**: Monitor job application statuses:
  - Applied  
  - Interview Scheduled  
  - Selected  
  - Rejected  
- **Application History**: View all previous job applications  
- **Profile Management**: Update user information  

### Responsive Design
- Mobile-first layout  
- Adaptive interface for different screen sizes  
- Touch-friendly UI  
- Accessibility support  

---

## ✅ Testing

The application includes test suites for components:
```bash
npm test
```

---

## 👥 Contributors  
Afrah, Bala, Swetha
