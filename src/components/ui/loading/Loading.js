import React from 'react';

import Style from './Loading.module.css';

const loading = (props) => (
    <div className={Style.Container} >
        <div className={Style.Spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default loading;