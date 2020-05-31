
// If you have issues with MutationObserver
// https://github.com/testing-library/dom-testing-library/issues/477

import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Tests fot Todo component', () => {
  it('Should add new task when form has been submitted', async () => {
    // render component
    const { getByTestId, getByText } = render(<Todo/>);    
    
    // search input
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    );
    //console.log(fieldNode)

    // type into input
    const newTask = 'testing';
    fireEvent.change(fieldNode, 
      { 
        target: {
          value: newTask
        }
      });
    expect(fieldNode.value).toEqual(newTask);
    
    // search button
    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    );
    
    // click button
    fireEvent.click(btnNode);
    
    // search table, not using!
    //const tableNode = await waitForElement(
    //  () => getByTestId('table')
    //)
    //console.log(tableNode.innerHTML);
    
    const tdNode = await waitForElement(
     () => getByText(newTask)
    )
    
    // verify if task has been add to table
    expect(tdNode).toBeDefined();
  })
});