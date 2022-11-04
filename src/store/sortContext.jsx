import { createContext, useState } from "react";
import Dummy_Data from '../MOCK_DATA.json';

const SortContext = createContext({})

export const SortContextProvider = (props) => {
    const [data, setData] = useState(Dummy_Data)

    const orderHandler = (order) => {
        if (order === 'ascending') {
            const sortedData = [...data].sort((a, b) =>
                a['first_name'].toLowerCase() < b['first_name'].toLowerCase() && -1
            );
            setData(sortedData);
        }

        if (order === 'descending') {
            const sortedData = [...data].sort((a, b) =>
                a['first_name'].toLowerCase() > b['first_name'].toLowerCase() && -1
            );
            setData(sortedData);
        }



    }

    const contextValue = {
        data: data,
        orderHandler: orderHandler
    }

    return <SortContext.Provider value={contextValue}>
        {props.children}
    </SortContext.Provider>
}

export default SortContext;