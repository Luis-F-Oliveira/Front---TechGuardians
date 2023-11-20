import { createContext } from "react"
import { useState } from "react"
import PropTypes from "prop-types"
export const dashContext = createContext()

export function DashProvider ({children}) {
    const [render, setRender] = useState(false)
    const [renderTwo, setRenderTwo] = useState(false)

    const contextValues = {
        render: render,
        setRender: setRender,
        renderTwo: renderTwo,
        setRenderTwo: setRenderTwo
    }
    return (
        <dashContext.Provider value={contextValues}>
            {children}
        </dashContext.Provider>
    )
}

DashProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
