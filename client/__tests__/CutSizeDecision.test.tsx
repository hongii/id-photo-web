import React from 'react';
import { render, screen } from '@testing-library/react';
import CutSizeDecision from '../pages/cut-size-decision';

describe('CutSizeDecision Page', () => {
  it('renders a header', () => {
    render(<CutSizeDecision />);

    const heading = screen.getByRole('heading', {
      name: /컷 사이즈/,
      level: 1,
    });
    expect(heading).toBeInTheDocument();

    const backIcon = screen.getByLabelText(/뒤로 가기/);
    expect(backIcon).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toContainElement(backIcon);
  });

  it('renders a cut size list', () => {
    render(<CutSizeDecision />);

    const heading = screen.getByRole('heading', {
      name: /최종 사진 크기 선택/,
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const cutSizeList = screen.getAllByRole('listitem', {
      name: /cut size item/,
    });
    expect(cutSizeList).not.toHaveLength(0);
    cutSizeList.forEach((el) => {
      expect(el).toContainElement(screen.getByAltText(/.+용 컷 사이즈/));
      expect(el).toContainElement(screen.getByText(/.+용/));
      expect(el).toContainElement(
        screen.getByText(/.*컷 사이즈 (\d+.?\d*cm) x (\d+.?\d*cm)/)
      );
      expect(el).toContainElement(
        screen.getByRole('button', { name: /선택하기/ })
      );
    });
  });

  it('renders item links', () => {
    render(<CutSizeDecision />);

    const cutSizeList = screen.getAllByRole('listitem', {
      name: /cut size item/,
    });
    const itemLinks = screen.getAllByRole('listitem', { name: /item link/ });
    expect(itemLinks).not.toHaveLength(0);
    expect(itemLinks).toHaveLength(cutSizeList.length);
  });
});
