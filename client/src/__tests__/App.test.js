import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { useAuthUser } from "../AuthContext";

// Mock the AuthContext
jest.mock("../AuthContext", () => ({
  useAuthUser: jest.fn(),
}));

// No need to mock react-router-dom here since we have __mocks__ file
// The mock from __mocks__/react-router-dom.js will be automatically used

describe("App Component", () => {
  const mockLogin = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    useAuthUser.mockReturnValue({
      login: mockLogin,
      error_call: null,
      isAuthenticated: false,
    });
  });

  test("renders the Job Portal header", () => {
    render(<App />);
    expect(screen.getByText("Job Portal")).toBeInTheDocument();
  });

  test("renders login form when not authenticated", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("shows error message when error_call exists", () => {
    useAuthUser.mockReturnValue({
      login: mockLogin,
      error_call: "Invalid credentials",
      isAuthenticated: false,
    });
    
    render(<App />);
    expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
  });

  
  test("redirects to /joblist when authenticated", () => {
    useAuthUser.mockReturnValue({
      login: mockLogin,
      error_call: null,
      isAuthenticated: true,
    });
    
    render(<App />);
    
    // Get the mocked navigate function from your mock
    const { useNavigate } = require("react-router-dom");
    const mockNavigate = useNavigate();
    expect(mockNavigate).toHaveBeenCalledWith("/joblist");
  });
});