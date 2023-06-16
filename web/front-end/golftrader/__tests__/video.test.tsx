import { render } from '@testing-library/react';
import Video1 from '../components/molecules/video.molecule';
import React from 'react';

describe('Video1', () => {
  it('renders the video component with the correct source and attributes', () => {
    const { container } = render(<Video1 />);

    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/arccos_video_1.mp4');
    expect(video).toHaveAttribute('autoPlay');
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('loop');
  });

  it('renders the wrapper div with the correct ID', () => {
    const { container } = render(<Video1 />);

    const wrapperDiv = container.querySelector('#wrapper_div');
    expect(wrapperDiv).toBeInTheDocument();
  });

  it('renders the video component with the correct CSS class', () => {
    const { container } = render(<Video1 />);

    const video = container.querySelector('video');
    expect(video).toHaveClass('video1');
  });
});
