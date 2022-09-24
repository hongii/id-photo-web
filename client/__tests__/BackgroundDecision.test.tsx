import React from 'react';
import { render, screen } from '@testing-library/react';
import BackgroundDecision from '../pages/background-decision';

describe('Background Decision Page', () => {
  it('renders a header', () => {
    render(<BackgroundDecision />);

    const heading = screen.getByRole('heading', {
      name: /배경 결정/,
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
    render(<BackgroundDecision />);

    const result = screen.getByAltText(/얼굴 사진 결과물/);
    expect(result).toBeInTheDocument();
  });

  it('renders a type list', () => {
    render(<BackgroundDecision />);

    const heading = screen.getByRole('heading', {
      name: /배경 종류 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /종류 목록/ });
    const listItem = screen.getByRole('listitem', { name: /type item/ });
    expect(list).toContainElement(listItem);
    expect(listItem).toContainElement(
      screen.getByRole('button', { name: /단색/ })
    );
    expect(listItem).toContainElement(screen.getByText(/\|/));
  });

  it('renders a background color list', () => {
    render(<BackgroundDecision />);

    const heading = screen.getByRole('heading', {
      name: /배경 색상 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /색상 목록/ });
    const listItem = screen.getByRole('listitem', { name: /color item/ });
    expect(list).toContainElement(listItem);
    expect(listItem).toContainElement(
      screen.getByRole('button', { name: /#ffffff/ })
    );
  });
});
