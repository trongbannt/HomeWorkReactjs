import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';


const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={Classes.Content} >
               gsdgsdfgsdf {props.children}
            </main>
        </Aux>
    );
}

export default layout;