import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoRetouch from '../pages/photo-retouch';

describe('Photo Retouch Page', () => {
  it('renders a header', () => {
    render(<PhotoRetouch />);

    const heading = screen.getByRole('heading', {
      name: /사진 보정/,
      level: 1,
    });
    expect(heading).toBeInTheDocument();

    const backIcon = screen.getByLabelText(/뒤로 가기/);
    expect(backIcon).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toContainElement(backIcon);

    const completeBtn = screen.getByRole('button', { name: /완료/ });
    expect(completeBtn).toBeInTheDocument();
  });

  it('renders a result image', () => {
    render(<PhotoRetouch />);

    const result = screen.getByAltText(/얼굴 사진 결과물/);
    expect(result).toBeInTheDocument();
  });

  it('renders a type list', () => {
    render(<PhotoRetouch />);

    const heading = screen.getByRole('heading', {
      name: /보정 종류 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /종류 목록/ });
    const listItem = screen.getByRole('listitem', { name: /type item/ });
    expect(list).toContainElement(listItem);
    expect(listItem).toContainElement(
      screen.getByRole('button', { name: /미백/ })
    );
    expect(listItem).toContainElement(screen.getByText(/\|/));
  });

  it('renders a range input', () => {
    render(<PhotoRetouch />);

    const heading = screen.getByRole('heading', {
      name: /보정하기/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const minText = screen.getByLabelText(/0/);
    const maxText = screen.getByLabelText(/100/);
    expect(minText).toBeInTheDocument();
    expect(maxText).toBeInTheDocument();

    const range = screen.getByRole('slider');
    expect(range).toBeInTheDocument();
  });
});
