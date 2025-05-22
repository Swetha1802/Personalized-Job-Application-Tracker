import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import JobListings from '../JobListings';
import { AuthContext } from '../AuthContext'; // if you're mocking context

describe('JobListings Component', () => {
  // Mock the fetch API globally
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.clearAllMocks();
  });

  const mockJobs = [
    {
      job_id: '1',
      job_title: 'Software Engineer',
      job_city: 'Boston',
      employer_name: 'Google',
      job_description: 'Develop scalable systems.',
    },
    {
      job_id: '2',
      job_title: 'Frontend Developer',
      job_city: 'New York',
      employer_name: 'Facebook',
      job_description: 'Work on UI components.',
    }
  ];

  const mockContext = {
    user: { name: 'Test User' },
    insertApplication: jest.fn(),
    jobIds: [],
    getJobId: jest.fn(),
  };

  it('should display loading text initially', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'OK', data: mockJobs })
    });

    render(
      <AuthContext.Provider value={mockContext}>
        <JobListings />
      </AuthContext.Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  

  it('should mark a job as applied when clicking the button', async () => {
    const mockJob = {
      job_id: '1',
      job_title: 'Software Engineer',
      employer_name: 'Google',
      apply_options: [
        { publisher: 'LinkedIn', apply_link: 'https://linkedin.com/job1' },
      ],
    };
  
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'OK', data: [mockJob] }),
    });
  
    const mockInsertApplication = jest.fn();
    const mockContextWithInsert = {
      ...mockContext,
      insertApplication: mockInsertApplication,
    };
  
    render(
      <AuthContext.Provider value={mockContextWithInsert}>
        <JobListings />
      </AuthContext.Provider>
    );
  
    await waitFor(() => {
      fireEvent.click(screen.getByText('Software Engineer')); // Open job details
    });
  
    const markAsAppliedButton = screen.getByText('Mark as Applied');
    fireEvent.click(markAsAppliedButton);
  
    expect(mockInsertApplication).toHaveBeenCalledWith(
      mockContextWithInsert.user.email,
      mockJob.job_id,
      'Applied',
      expect.any(String), // timestamp
      expect.any(String), // timestamp
      'Nothing',
      mockJob.job_title,
      mockJob.employer_name,
      mockJob.apply_options[0].apply_link,
      mockJob.apply_options[0].publisher,
    );
  
    // Button should update to "Applied"
    expect(screen.getByText('Applied')).toBeInTheDocument();
    expect(screen.queryByText('Mark as Applied')).not.toBeInTheDocument();
  });




  it('should mark a job as applied when clicking the button', async () => {
    const mockJob = {
      job_id: '1',
      job_title: 'Software Engineer',
      employer_name: 'Google',
      apply_options: [
        { publisher: 'LinkedIn', apply_link: 'https://linkedin.com/job1' },
      ],
      job_posted_at_timestamp: 1682937600, // Example timestamp
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'OK', data: [mockJob] }),
    });

    const mockInsertApplication = jest.fn();
    const mockContextWithInsert = {
      ...mockContext,
      insertApplication: mockInsertApplication,
    };

    render(
      <AuthContext.Provider value={mockContextWithInsert}>
        <JobListings />
      </AuthContext.Provider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('Software Engineer')); // Open job details
    });

    const markAsAppliedButton = screen.getByText('Mark as Applied');
    fireEvent.click(markAsAppliedButton);

    expect(mockInsertApplication).toHaveBeenCalledWith(
      mockContextWithInsert.user.email,
      mockJob.job_id,
      'Applied',
      expect.any(String), // timestamp
      expect.any(String), // timestamp
      'Nothing',
      mockJob.job_title,
      mockJob.employer_name,
      mockJob.apply_options[0].apply_link,
      mockJob.apply_options[0].publisher,
    );

    // Button should update to "Applied"
    await waitFor(() => {
      expect(screen.getByText('Applied')).toBeInTheDocument();
      expect(screen.queryByText('Mark as Applied')).not.toBeInTheDocument();
    });
  });
});
