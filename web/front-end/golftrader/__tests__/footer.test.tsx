import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from '../components/organisms/footer.organism';
import React from 'react';

describe('Footer', () => {
  it('renders the logo with the correct image source and alt text', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Golftrader logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'golftrader_1.svg');
  });

  it('renders the sections with the correct titles and links', () => {
    render(<Footer />);
    const sections = screen.getAllByTestId('footer-section');
    expect(sections).toHaveLength(2);

    // Section 1
    const section1Title = screen.getByText('Golftrader');
    expect(section1Title).toBeInTheDocument();

    const section1Links = screen.getAllByTestId('section-1-link');
    expect(section1Links).toHaveLength(2);

    // Section 2
    const section2Title = screen.getByText('Sections');
    expect(section2Title).toBeInTheDocument();

    const section2Links = screen.getAllByTestId('section-2-link');
    expect(section2Links).toHaveLength(4);
  });

  it('calls handleClick function when a section link is clicked', () => {
    const handleClick = jest.fn();
    render(<Footer  />);

    const section1Link = screen.getByText('Home');
    fireEvent.click(section1Link);
    expect(handleClick).toHaveBeenCalledWith('section-1');

    const section2Link = screen.getByText('Dashboard');
    fireEvent.click(section2Link);
    expect(handleClick).toHaveBeenCalledWith('section-1');
  });

  it('renders the disclosure bar with the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const disclosureBar = screen.getByText(`Copyright @ ${year} Golftrader`);
    expect(disclosureBar).toBeInTheDocument();
  });
});
