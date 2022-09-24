import React from 'react';
import { render, screen } from '@testing-library/react';
import HairDecision from '../pages/hair-decision';

describe('Hair Decision Page', () => {
  it('renders a header', () => {
    render(<HairDecision />);

    const heading = screen.getByRole('heading', {
      name: /헤어 결정/,
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

  it('renders a photo alignment', () => {
    render(<HairDecision />);

    const heading = screen.getByRole('heading', {
      name: /사진 조정/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const faceAlignment = screen.getByLabelText(/얼굴 위치 조정/);
    expect(faceAlignment).toBeInTheDocument();
  });

  it('renders a type list', () => {
    render(<HairDecision />);

    const heading = screen.getByRole('heading', {
      name: /헤어 스타일 종류 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /종류 목록/ });
    const listItem = screen.getByRole('listitem', { name: /type item/ });
    expect(list).toContainElement(listItem);
    expect(listItem).toContainElement(
      screen.getByRole('button', { name: /롱/ })
    );
    expect(listItem).toContainElement(screen.getByText(/\|/));
  });

  it('renders a hair style list', () => {
    render(<HairDecision />);

    const heading = screen.getByRole('heading', {
      name: /헤어 스타일 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /스타일 목록/ });
    const listItem = screen.getByRole('listitem', { name: /style item/ });
    expect(list).toContainElement(listItem);
    expect(listItem).toContainElement(
      screen.getByAltText(/헤어 스타일 이미지/)
    );
  });
});
