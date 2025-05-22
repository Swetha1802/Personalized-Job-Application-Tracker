# Job Application Platform  

Vercel App Link - https://job-portal-peach-zeta.vercel.app/

The Job Tracker Application is a comprehensive web-based platform designed to assist job seekers in managing their job search process. By connecting to external job platforms like LinkedIn, Glassdoor, and Indeed, the application provides real-time job listings based on the user's search keywords.

Our platform helps users track applications, analyze performance metrics from various job sites, and streamline the entire job search journey with features such as:

    Real-time job listings from multiple platforms
    Application status tracking
    Performance analytics dashboard
    Direct application capabilities

## Project Structure

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

### Configuration

1. Set up your environment variables:
   - Copy the example `.env` file in the api directory
   - Update with your database connection string and other configuration

### Running the Application

1. Start the backend server:
```
cd api
npm start
```

2. Start the frontend application:
```
cd client
npm start
```

## Technology Stack

- **Frontend**:
  - React
  - React Router for navigation
  - CSS for styling

- **Backend**:
  - Node.js
  - Prisma ORM for database operations


## Features

### User Authentication System
- **Sign Up**: New users can create accounts by providing their personal information including:
  - First name and last name
  - Email address (with validation)
  - Secure password (with strength requirements)
  - Date of birth (with age verification)
- **Login**: Returning users can securely access their accounts
- **Authentication Context**: React context API implementation maintains user session across the application
- **Protected Routes**: Certain pages and features are only accessible to authenticated users
- **Form Validation**: Client-side validation ensures data integrity before submission

### Job Listings
- **Browse Jobs**: Users can view a comprehensive list of available job positions
- **Search Functionality**: Filter jobs based on various criteria
- **Apply Mechanism**: Streamlined process for submitting applications to interesting positions.

### Dashboard Interface
- **User Profile**: Personalized dashboard showing user information
- **Application Tracking**: Monitor the status of submitted applications:
  - Applied
  - Interviews scheduled
  - Selected
  - Rejected applications
- **Application History**: Complete history of all past applications
- **Profile Management**: Users can update their personal information and preferences


### Responsive Design
- **Mobile-First Approach**: Optimized for various screen sizes and devices
- **Adaptive Layouts**: Interface elements rearrange based on viewport size
- **Touch-Friendly Controls**: Enhanced usability on touchscreen devices
- **Consistent Experience**: Maintains functionality and aesthetics across desktop, tablet, and mobile devices
- **Accessibility Features**: Designed with accessibility guidelines in mind for inclusive user experience



## Testing

The application includes test suites for components:
```
npm test
```