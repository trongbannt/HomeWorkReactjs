import React from 'react';
import Aux from '../../hoc/Auxi';
import Classes from './Layout.css';


const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={Classes.Content} >
               12345sasdas {props.children}
            </main>
        </Aux>
    );
}

export default layout;