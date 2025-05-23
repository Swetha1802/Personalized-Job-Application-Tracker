
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './dashboard.css'; 

const Dashboard = () => {
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const [letter,setLetter] = useState();
  useEffect( () => {
    if(user && user.firstName) {
      setLetter(user.firstName.charAt(0).toUpperCase())
    }
      
  },[]);

  
  const navigateTo = (path) => {
    navigate(path);
  };

 
   const cardBackgroundColors = [
     'rgba(208, 190, 190, 0.5)', 
     'rgba(255, 182, 193, 0.5)', 
     'rgba(152, 251, 152, 0.5)'  
   ];

    // Icon background colors (applied via inline style for now)
   const iconBackgroundColors = [
     'rgba(206, 213, 227, 0.7)', // CornflowerBlue
     'rgba(186, 163, 170, 0.7)', // PaleVioletRed
     'rgba(162, 181, 170, 0.7)'    // SeaGreen
   ];


  return (
    <div className="dashboard-container">
      {/* Decorative blobs using CSS classes */}
      <div className="dashboard-blob blob-top-right"></div>
      <div className="dashboard-blob blob-bottom-left"></div>
      <div className="dashboard-blob blob-middle-left"></div>
      <div className="dashboard-blob blob-small-top"></div>

      {/* Main content area */}
      <div className="dashboard-main-content">
        {/* Left side - Profile area */}
        <div className="dashboard-profile-section">
          <div className="profile-pic-container">
            {user && user.profilePic ? (
              <img
                src={user.profilePic}
                alt="Profile"
                className="profile-pic"
              />
            ) : (
              <div className="profile-placeholder">
                {letter}
              </div>
            )}
          </div>
          <h2 className="welcome-text">
            Hey {user ? user.name || "there" : "there"}!
          </h2>
          <p className="welcome-subtext">
            What would you like to do today?
          </p>
        </div>

        {/* Right side - Feature cards */}
        <div className="dashboard-feature-section">
          {/* Job Search Feature */}
          <div
            className="dashboard-feature-card"
            style={{ backgroundColor: cardBackgroundColors[0] }} 
            onClick={() => navigateTo('/joblist/jobsearch')}
            // Remove onMouseEnter/onMouseLeave - handled by CSS :hover
          >
            <div
                className="dashboard-feature-icon"
                style={{ backgroundColor: iconBackgroundColors[0] }} 
            >
              🔍
            </div>
            <div className="dashboard-feature-content">
              <h3 className="feature-title">Wanna search for jobs?</h3>
              <p className="feature-description">
                Discover opportunities tailored just for you! Find your dream job today.
              </p>
            </div>
          </div>

          {/* Performance Metrics Feature */}
          <div
            className="dashboard-feature-card"
             style={{ backgroundColor: cardBackgroundColors[1] }}
            onClick={() => navigateTo('/joblist/metrics')}
            // Remove onMouseEnter/onMouseLeave
          >
            <div
                 className="dashboard-feature-icon"
                 style={{ backgroundColor: iconBackgroundColors[1] }}
            >
              📊
            </div>
            <div className="dashboard-feature-content">
              <h3 className="feature-title">See your performance metrics</h3>
              <p className="feature-description">
                Track your progress and get insights on your job search journey!
              </p>
            </div>
          </div>

          {/* Application Tracking Feature */}
          <div
            className="dashboard-feature-card"
             style={{ backgroundColor: cardBackgroundColors[2] }}
            onClick={() => navigateTo('/joblist/profile')}
            // Remove onMouseEnter/onMouseLeave
          >
             <div
                 className="dashboard-feature-icon"
                 style={{ backgroundColor: iconBackgroundColors[2] }}
             >
              📝
            </div>
            <div className="dashboard-feature-content">
              <h3 className="feature-title">Track your applications</h3>
              <p className="feature-description">
                Stay organized! Keep tabs on where you've applied and what's next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;