import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import WatchList from '../containers/Watchlist'
import { HomeLayout } from '../layouts'

export default function AppRouter() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={props => <Redirect to={{
                    pathname: '/watchlist',
                    state: { from: props.location }
                }} />}
            />
            <AppRouteLayout
                exact
                path="/watchlist"
                component={WatchList}
                layout={HomeLayout}
            />
        </Switch>
    )
}

// eslint-disable-next-line no-shadow
const AppRouteLayout = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (Layout) {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                }
                return <Component {...props} />
            }}
        />
    )
}

AppRouteLayout.propTypes = {
    component: PropTypes.elementType.isRequired,
    layout: PropTypes.elementType,
}
