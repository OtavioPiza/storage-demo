import { createContext, useEffect, useState } from "react";

// Create the context. The context is an object with two properties: data and setData.
const DataContext = createContext({
    data: undefined,
    setData: () => { },
});

// Simple context provider that stores the data in the local storage.
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(undefined);

    // Load the data from the local storage when the component is mounted. If there is no data
    // in the local storage, set the data to an empty string.
    useEffect(() => {
        const localData = localStorage.getItem("data");
        setData(localData ? localData : '');
    }, []);

    // Update the local storage when the data changes.
    useEffect(() => {
        if (data !== undefined) localStorage.setItem("data", data);
    }, [data]);

    // Return the context provider.
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
