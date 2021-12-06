import { render,screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../redux/store';
import { SnackbarProvider } from 'notistack';
import GadgetShop from '../components/GadgetShop';
import * as redux from 'react-redux';



test("GadgetShop", () => {

    jest.spyOn(redux, "useSelector").mockImplementation(() => {
        return [{id: 1, name: "p1", price: 1000, decription: ""}, {id: 2, name: "p2", price: 2000, decription: ""}]
    })
    render(<Provider store={store}><SnackbarProvider maxSnack={3}><GadgetShop/></SnackbarProvider></Provider>)
    waitFor(() => {
        screen.debug();
    })
    

})