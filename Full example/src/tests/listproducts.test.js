import { render,screen, fireEvent, waitFor } from '@testing-library/react';
import ListProducts from '../components/ListProducts';
import { Provider } from 'react-redux';
import {store} from '../redux/store';
import axios from 'axios';

jest.mock('axios');
jest.spyOn(window, "alert").mockImplementation(() => {});



test("ListProducts", async ()=> {

    axios.get.mockResolvedValueOnce({data: [{id: 1, name: "p1", price: 1000, decription: ""}, {id: 2, name: "p2", price: 2000, decription: ""}]});
    axios.delete.mockResolvedValueOnce({status: 200});
    render(<Provider store={store}><ListProducts/></Provider>);
   
    expect(axios.get).toBeCalledTimes(1);

    // await waitFor(() => {
    //     screen.debug();
    // });
    await waitFor(() =>  screen.getAllByTestId("product"));
    screen.debug();
    expect(screen.getAllByTestId("product")).toHaveLength(2);


    axios.get.mockResolvedValueOnce({data: [{id: 1, name: "p1", price: 1000, decription: ""}]});
    const allDeleteBtns = screen.getAllByText("Delete");
    fireEvent.click(allDeleteBtns[1], {});
    
    await waitFor(() =>  screen.getAllByTestId("product"));
    screen.debug();
    expect(screen.getAllByTestId("product")).toHaveLength(1);


})