import React from "react";

const UserContext = React.createContext('naidu')

const UsreProvider = UserContext.Provider
const UsreConsumer = UserContext.Consumer

export { UsreProvider, UsreConsumer }
export default UserContext
