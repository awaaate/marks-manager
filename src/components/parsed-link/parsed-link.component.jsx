import React from "react";
import { Link } from "react-router-dom";

const ParsedLink = ({ to, children }) => {
    to = to.split(" ").join("-");
    to = encodeURI(to);

    return <Link to={to}>{children}</Link>;
};

export default ParsedLink;
