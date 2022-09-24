import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders a header', () => {
    render(<Home />);

    const header = screen.getByRole('heading', { name: /서비스 소개/ });
    expect(header).toBeInTheDocument();
  });

  it('renders a introduction', () => {
    render(<Home />);

    const intro = screen.getByText(
      /헤어 스타일을 바꾸고 싶으신가요\? 지금 바로 시작해 보세요!/
    );
    expect(intro).toBeInTheDocument();
  });

  it('renders a start button', () => {
    render(<Home />);

    const start = screen.getByText(/시작하기/);
    expect(start).toBeInTheDocument();

    const uploadFile = screen.getByLabelText(/사진 업로드/);
    expect(uploadFile).toBeInTheDocument();
  });
});
