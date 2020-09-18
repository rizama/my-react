import React, { Component, createContext } from 'react'

const RootContext = createContext()
const ProviderGlobal = RootContext.Provider

// High Order Component (HOC) Provider / Penyedia
export default function GlobalProvider(Children) {
    return (
        class ParentComponent extends Component {
            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                switch (action.type) {
                    case "PLUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case "MINUS_ORDER":
                        if (this.state.totalOrder <= 0) {
                            return this.setState({
                                totalOrder: 0
                            })
                        }
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                }
            }

            render() {
                return (
                    <ProviderGlobal value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </ProviderGlobal>
                )
            }
        }
    )
}

// High Order Component (HOC) Consumer / Pengguna
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentComponent extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }

    )
}