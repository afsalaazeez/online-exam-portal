// ********RoostGPT********
// Test generated by RoostGPT for test exam-portal using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AddTeacher from '../../../../../../frontend/src/components/Dashboard/AddTeacher/AddTeacher';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({
  loginReducer: {
    isAuthenticated: true,
    user: {
      userType: 'admin'
    }
  }
});

describe('AddTeacher Component Tests', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <AddTeacher />
        </Router>
      </Provider>
    );
  });

  test('renders without crashing', () => {
    expect(screen.getByTestId('add-teacher-form')).toBeInTheDocument();
  });

  test('allows the user to enter name', () => {
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } });
    expect(screen.getByTestId('name-input').value).toBe('John Doe');
  });

  test('validates the email address on blur', async () => {
    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(screen.getByTestId('email-error')).toBeInTheDocument();
    });
  });

  test('submits the form with valid data', () => {
    // Populate inputs and submit the form
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jane.doe@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: '123456' } });
    fireEvent.change(screen.getByTestId('confirm-password-input'), { target: { value: '123456' } });
    fireEvent.click(screen.getByTestId('submit-button'));

    waitFor(() => {
      expect(screen.getByTestId('success-message')).toHaveTextContent('Teacher added successfully!');
    });
  });

  // Add more tests as needed for error cases and other interactions
});


