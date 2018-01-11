import React from "react";
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand brand" to={""}>Developers rules</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to={"/index.html"}>Home</Link></li>
                        <li><Link to={"/new"}>New</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}