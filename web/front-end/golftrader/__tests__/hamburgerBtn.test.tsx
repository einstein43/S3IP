import { render, fireEvent } from '@testing-library/react';
import { HamburgerBtn } from '../components/atoms/hamburgerBtn.component';
import React from 'react';

describe('HamburgerBtn', () => {
  it('renders the button', () => {
    const { container } = render(
      <HamburgerBtn isOpen={false} setIsOpen={jest.fn()} style="default" />
    );

    const btn = container.firstChild;
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('menuBtn');
    expect(btn).toHaveClass('default');
  });

  it('calls the setIsOpen function with the opposite value when clicked', () => {
    const setIsOpen = jest.fn();
    const { container } = render(
      <HamburgerBtn isOpen={false} setIsOpen={setIsOpen} style="default" />
    );

    const btn: any = container.firstChild;
    fireEvent.click(btn);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
    expect(setIsOpen).toHaveBeenCalledWith(true);
  });

  it('applies the correct open state class when isOpen is true', () => {
    const { container } = render(
      <HamburgerBtn isOpen={true} setIsOpen={jest.fn()} style="default" />
    );

    const btn = container.firstChild;
    expect(btn).toHaveClass('menu__state_open_default');
  });
});
