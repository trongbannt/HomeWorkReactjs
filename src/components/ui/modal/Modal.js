import React, { Component } from 'react';
import Style from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[Modal] Will Update');
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={Style.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );

    }
}

export default Modal;