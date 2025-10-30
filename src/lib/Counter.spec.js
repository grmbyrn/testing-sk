import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Counter from './Counter.svelte';

describe('Counter', () => {
  it('renders with initial count', () => {
    const { getByText } = render(Counter);
    expect(getByText(/count is 0/)).toBeTruthy();
  });

  it('increments count on click', async () => {
    const { getAllByText, getByText } = render(Counter);
    const button = getAllByText(/count is 0/)[0];
    await fireEvent.click(button);
    expect(getByText(/count is 1/)).toBeTruthy();
  });
});
