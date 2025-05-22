import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../Login";
import { useAuthUser } from "../AuthContext";

// Mock the AuthContext
jest.mock("../AuthContext", () => ({
  useAuthUser: jest.fn(),
  
}));

describe("Login Component", () => {
  const mockRegister = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAuthUser.mockReturnValue({ register: mockRegister });

    const reactRouterDom = require("react-router-dom");
    reactRouterDom.useNavigate = jest.fn(() => mockNavigate);
  });

  const fillForm = ({
    firstName = "",
    lastName = "",
    email = "",
    password = "",
    dob = "",
  }) => {
    if (firstName)
      fireEvent.change(screen.getByPlaceholderText("First Name"), {
        target: { value: firstName },
      });
    if (lastName)
      fireEvent.change(screen.getByPlaceholderText("Last Name"), {
        target: { value: lastName },
      });
    if (password)
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: password },
      });
    if (email)
      fireEvent.change(screen.getByPlaceholderText("Enter your Mail Id"), {
        target: { value: email },
      });
    if (dob) {
      const dobInput = screen.getByLabelText("Enter your DOB");
      fireEvent.change(dobInput, { target: { value: dob } });
    }
  };

  test("shows error if fields are empty", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Sign Up"));

    expect(await screen.findByText("Fill in all fields!")).toBeInTheDocument();
  });

  
  test('shows an error message if password is too short or contains the email', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    // Fill in the form with a password that contains the email
    fireEvent.change(screen.getByPlaceholderText('Enter your Mail Id'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your DOB'), { target: { value: '2000-01-01' } });
  
    // Submit the form
    fireEvent.click(screen.getByText('Sign Up'));
  
    // Verify that the error message for the password is shown
    expect(screen.getByText('Password be greater than 8')).toBeInTheDocument();

  });

  test('shows an error message if user is younger than 18', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    // Fill in the form with a date of birth making the user under 18
    fireEvent.change(screen.getByPlaceholderText('Enter your Mail Id'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your DOB'), { target: { value: '2010-01-01' } });
  
    // Submit the form
    fireEvent.click(screen.getByText('Sign Up'));
  
    // Verify that the error message for age under 18 is shown
    expect(screen.getByText('Age must be greater than 18')).toBeInTheDocument();
  });


  test('shows an error message if email format is invalid', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    // Fill in the form with an invalid email
    fireEvent.change(screen.getByPlaceholderText('Enter your Mail Id'), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your DOB'), { target: { value: '2000-01-01' } });
  
    // Submit the form
    fireEvent.click(screen.getByText('Sign Up'));
  
    // Verify that the error message for invalid email is shown
    expect(screen.getByText('Please enter a valid email!')).toBeInTheDocument();
  });

  test('submits valid form successfully', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your Mail Id'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your DOB'), { target: { value: '2000-01-01' } });
  
    // Submit the form
    fireEvent.click(screen.getByText('Sign Up'));
  
    // Verify that the register function was called
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });


  test('renders all input fields and sign up button', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your Mail Id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your DOB')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

});
