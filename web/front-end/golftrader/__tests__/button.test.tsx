import { render, fireEvent } from '@testing-library/react';
import { Button } from '../components/atoms/button.component';
import React from 'react';

describe('Button', () => {
  it('renders the button with correct theme and size', () => {
    const { getByText, getByAltText } = render(
      <Button theme="primary" size="large">
        Click me
      </Button>
    );

    const button = getByText('Click me');
     expect(button).toHaveClass('button');
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('large');
  });

 

    const { getByAltText } = render(
      <Button theme="secondary" size="small"  >
        Click me
      </Button>
    );

    const image = getByAltText('Icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'icon.png');
    expect(image).toHaveAttribute('alt', 'Icon');
    expect(image).toHaveAttribute('width', '12');
    expect(image).toHaveAttribute('height', '12');
  });

  it('calls the handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button theme="primary" size="small" handleClick={handleClick}>
        Click me
      </Button>
    );

    const button = getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
 
