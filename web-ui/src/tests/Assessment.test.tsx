import { render, screen, waitFor } from '@testing-library/react';
import { mockComponent } from 'react-dom/test-utils';
import Assessment from '../containers/Assessment';
import FormApi from '../Services/FormApi';

// Mock dependencies
jest.mock('../Services/FormApi');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { details: null }
  }),
  useNavigate: () => jest.fn(),
}));
jest.mock('uuid', () => ({
  v4: () => 'mock-uuid',
}));


const mockedFormApi = FormApi as jest.Mocked<typeof FormApi>;

describe('Assessment Component', () => {
  test('Renders categories and questions from mocked API for NEW Aessment', async () => {
    const mockCategories = [
      {
        Id: 1,
        Category: 'Physical',
        Questions: [
          { Id: 1, Question: 'Did you sleep well?', CategoryId: 1, Answer: 0, Improve: false, CreateDt: null, UpdatedDt: null },
        ],
        CreateDt: '',
        UpdatedDt: '',
      },
      {
        Id: 2,
        Category: 'Emotional',
        Questions: [
          { Id: 2, Question: 'Did you express your feelings?', CategoryId: 2, Answer: 0, Improve: false, CreateDt: null, UpdatedDt: null },
        ],
        CreateDt: '',
        UpdatedDt: '',
      },
    ];

    mockedFormApi.getCategories.mockResolvedValue(mockCategories);

    render(<Assessment readOnly={false} />);

    // Wait for the component to update after the async call
    await waitFor(() => {
      // Check if category titles are rendered
      expect(screen.getByText('Physical')).toBeInTheDocument();
      expect(screen.getByText('Emotional')).toBeInTheDocument();

      // Check if questions are rendered
      expect(screen.getByText('Did you sleep well?')).toBeInTheDocument();
      expect(screen.getByText('Did you express your feelings?')).toBeInTheDocument();
    });
  });
});

