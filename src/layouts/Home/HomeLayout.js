import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css'
import './HomeLayout.scss'
import Header from './Header'

export default function HomeLayout(props) {
    return <Layout {...props} />
}

const Layout = props => {
    const { children } = props;

    return (
        <>
            <div>
                <Header {...props} />
                <main>{children}</main>
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
}
