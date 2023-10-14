import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const localData = localStorage.getItem("data");
        setData(localData ? localData : '');
    }, []);

    useEffect(() => {
        if (data !== undefined) localStorage.setItem("data", data);
    }, [data]);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
