const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return<AppContext.Provider></AppContext.Provider>
}

export { AppContext , AppProvider};