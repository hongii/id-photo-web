import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoSave from '../pages/photo-save';

describe('Photo Save Page', () => {
  it('renders a header', () => {
    render(<PhotoSave />);

    const heading = screen.getByRole('heading', {
      name: /사진 저장/,
      level: 1,
    });
    expect(heading).toBeInTheDocument();

    const backIcon = screen.getByLabelText(/뒤로 가기/);
    expect(backIcon).toBeInTheDocument();

    const homeIcon = screen.getByLabelText(/메인 화면으로 가기/);
    expect(homeIcon).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links[0]).toContainElement(backIcon);
    expect(links[1]).toContainElement(homeIcon);
  });

  it('renders a result image', () => {
    render(<PhotoSave />);

    const result = screen.getByAltText(/얼굴 사진 결과물/);
    expect(result).toBeInTheDocument();
  });

  it('renders a save button', () => {
    render(<PhotoSave />);

    const save = screen.getByRole('button', { name: /저장하기/ });
    expect(save).toBeInTheDocument();
  });
});
