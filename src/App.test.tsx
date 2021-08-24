import React, {DOMElement} from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Columns from './component/Columns';
import RepositoryTable from './component/RepositoryTable';


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
        };
};

test('renders search input', () => {
  render(<App />);
  const searchInputElement = screen.getByText("Search");
  expect(searchInputElement).toBeInTheDocument();

});
test('property Columns object', () => {
  expect(Columns[0].title).toBeDefined();
  expect(Columns[0].dataIndex).toBe('name');
  expect(Columns[0].key).toBe('name');
  expect(Columns[0].sorter).toBeDefined();
  expect(Columns[0].render).toBeDefined();

  expect(Columns[1].title).toBeDefined();
  expect(Columns[1].dataIndex).toBe('stars');
  expect(Columns[1].key).toBe('stars');
  expect(Columns[1].sorter).toBeDefined();

  expect(Columns[2].title).toBeDefined();
  expect(Columns[2].dataIndex).toBe('forks');
  expect(Columns[2].key).toBe('forks');
  expect(Columns[2].sorter).toBeDefined();
})
test('renders table', () => {
    render(<RepositoryTable/>);
    const table = document.getElementsByTagName('table')[0];
    expect(table).toBeInTheDocument();
})

