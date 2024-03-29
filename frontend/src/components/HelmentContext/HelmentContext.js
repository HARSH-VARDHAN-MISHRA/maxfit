import React from 'react'

import { Helmet } from "react-helmet";
const HelmentContext = ({ title, description , keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="MAXFIT Pipes & Fittings" />
            <meta name="email" content="sales.indiasalescorporation@gmail.com" />
            <meta name="profile" content="" />
        </Helmet>
    )
}

export default HelmentContext