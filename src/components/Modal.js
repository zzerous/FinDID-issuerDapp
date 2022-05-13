import React, {Component} from 'react';
import './Modal.scss';

class Modal extends Component {
    render() {
        const {open, close, title, data} = this.props;
        return(
            <div className={open?'openModal modal' : 'modal'}>
                {open? (
                    <section>
                        <header>
                            {title}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main className="main">{this.props.data}</main>
                        <footer>
                            <button className="submit" onClick={close}>
                                크리덴셜 발급
                            </button>
                        </footer>
                    </section>
                ):null}
            </div>
        )
    }
}

export default Modal;