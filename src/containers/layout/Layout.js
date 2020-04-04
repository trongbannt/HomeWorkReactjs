import React, { Component } from 'react';
import Classes from './Layout.module.css';
import Toolbar from '../../components/navigations/toolbar/Toolbar';
import SideDrawer from '../../components/navigations/sideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={Classes.Content} >
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;