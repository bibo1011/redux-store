import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers';

// data maintained by global state
// eventually be able to add offline capabilities for our app with IndexedDB
// will make adding those capabilities much easier than having to do it to each useQuery() Hook's response
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
