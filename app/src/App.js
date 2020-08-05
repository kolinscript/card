import React, {Component} from 'react';
import './App.css';
import {isNil} from "lodash";
import ReactPageScroller from "react-page-scroller";
import {updateCanvas} from "./misc";

class App extends Component {
    drawBackground = updateCanvas;

    constructor(props) {
        super(props);
        this.state = {
            currentPage: null
        };
        this.handleLoad = this.handleLoad.bind(this);
        this.drawBackground = this.drawBackground.bind(this);
        this.contentRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        this.drawBackground();
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    handleLoad() {
        const url_current = window.location.href;
        console.log(url_current);
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    wheel(event) {
        if (this.state.scrollerIndex >= 0) {
            if (event.deltaY < 0) {
                // scrollWindowUp();
                if (!this.state.scrollerActing) {
                    console.info('SCROLLUP ' + event.deltaY);
                    this.setState({scrollerIndex: this.state.scrollerIndex + 1, scrollerActing: true}, () => {
                        this.contentRef.current.style.transform = `translate3d(0, ${(this.state.scrollerIndex) * -100}%, 0)`;
                        console.log('scrollerIndex ', this.state.scrollerIndex);
                        console.log('scrollerActing ', this.state.scrollerActing);
                        setTimeout(() => {
                            this.setState({scrollerActing: false});
                        }, 2000);
                    });
                }
            } else {
                // scrollWindowDown;
                if (!this.state.scrollerActing) {
                    console.info('SCROLLDOWN ' + event.deltaY);
                    if (this.state.scrollerIndex === 0) {
                        this.setState({scrollerIndex: this.state.scrollerIndex, scrollerActing: true}, () => {
                            this.contentRef.current.style.transform = `translate3d(0, 0, 0)`;
                            console.log('scrollerIndex ', this.state.scrollerIndex);
                            console.log('scrollerActing ', this.state.scrollerActing);
                            setTimeout(() => {
                                this.setState({scrollerActing: false});
                            }, 2000);
                        });
                    } else {
                        this.setState({scrollerIndex: this.state.scrollerIndex - 1, scrollerActing: true}, () => {
                            this.contentRef.current.style.transform = `translate3d(0, ${(this.state.scrollerIndex) * 100}%, 0)`;
                            console.log('scrollerIndex ', this.state.scrollerIndex);
                            console.log('scrollerActing ', this.state.scrollerActing);
                            setTimeout(() => {
                                this.setState({scrollerActing: false});
                            }, 2000);
                        });
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="app">
                <div className={'main'}>
                    <div className="wrapper-canvas"></div>
                    <div className="wrapper-content"
                         onWheel={(e) => this.wheel(e)}
                    >
                        <div className="border"><span></span></div>
                        <div className="content">
                            <ReactPageScroller
                                containerHeight='100%'
                                containerWidth='100%'
                                pageOnChange={this.handlePageChange}
                                customPageNumber={this.state.currentPage}
                            >
                                <div className="item">
                                    <h1>frontend engineer</h1>
                                    <h2>Nikolai Koshkarov</h2>
                                    <div className="links">
                                        <div className="link">
                                            <a className="github"
                                               href="https://github.com/kolinscript"
                                               target="_self"
                                               rel="noopener noreferrer"
                                            >github
                                            </a>
                                        </div>
                                        <div className="link">
                                            <a className="gmail"
                                               mailTo="sdaasda"
                                            >telegram
                                            </a>
                                        </div>
                                        <div className="link">
                                            <a className="telega"
                                               href="https://t.me/kolingram"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                            >telegram
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <h1>my works</h1>
                                </div>
                            </ReactPageScroller>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
