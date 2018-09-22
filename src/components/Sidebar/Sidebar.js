import React from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';
import img2 from "./rad.png"
import img from "./radio.png"
import s from './Sidebar.scss';

const Sidebar = () => (
    <nav className={s.root}>
        <header className={s.logo}>
            <Link to="/app">
                <img src={img} alt="oo" width='200px'/>
            </Link>
        </header>
        <ul className={s.nav}>
            <LinksGroup
                header="Նորություններ"
                headerLink="/app"
                glyph="dashboard"
            />
            <LinksGroup
                header="Մեր մասին"
                headerLink="/app/aboutus"
                glyph="typography"
            />
            <LinksGroup
                header="Կինո"
                headerLink="/app/reviews"
                glyph="cinema"
            />
            <LinksGroup
                header="Ռադիո - գիրք"
                headerLink="/app/radiobooks"
                glyph="radio"
            />
            <LinksGroup
                header="Ինֆորմացիա"
                headerLink="/app/components"
                childrenLinks={[
                    {
                        name : 'Անալիտիկա',
                        link : '/app/components/analytics',
                    },
                    {
                        name : 'Լոկացիա',
                        link : '/app/components/location',
                    },
                ]}
                glyph="components"
            />
        </ul>
    </nav>
);

function mapStateToProps(store) {
    return {
        sidebarOpened : store.navigation.sidebarOpened,
        sidebarStatic : store.navigation.sidebarStatic,
    };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Sidebar)));
