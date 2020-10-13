import React, {Component} from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";
import {updateCanvas} from "./misc";

class App extends Component {
    drawBackground = updateCanvas;

    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            qrCodeShow: false,
            isSafari: false,
            windowHeight: null
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.showQrCOde = this.showQrCOde.bind(this);
        this.goToTop = this.goToTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('resize', () => {
            this.setState({
                windowHeight: window.innerHeight
            });
        })
        this.setState({
                isSafari:
                    ((navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
                        navigator.userAgent.match(/AppleWebKit/)) ||
                        window.safari !== undefined),
                windowHeight: window.innerHeight
            }
        );
        this.drawBackground();
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    handlePageChange = number => {
        this.setState({currentPage: number}); // set currentPage number, to reset it from the previous selected.
    };

    showQrCOde() {
        this.setState({qrCodeShow: !this.state.qrCodeShow});
    }

    goToTop() {
        this.setState({currentPage: 0});
    }

    render() {
        return (
            <div className="app" style={{height: this.state.windowHeight}}>
                <div className="main" style={{height: this.state.windowHeight}}>
                    <div className="wrapper-canvas"></div>
                    <div className={this.state.isSafari ? 'safari-filter active' : 'safari-filter'}></div>
                    <div className="wrapper-content">
                        <div className="border"><span></span></div>
                        <div className="content">
                            <ReactPageScroller
                                containerHeight='100%'
                                containerWidth='100%'
                                pageOnChange={this.handlePageChange}
                                customPageNumber={this.state.currentPage}
                            >
                                <div className="item one">
                                    <div className={this.state.qrCodeShow ? 'block hidden' : 'block'}>
                                        <div className="center">
                                            <div className="top">
                                                <div className="top-one">
                                                    <span className="el one">nikolai</span>
                                                </div>
                                                <div className="top-two">
                                                    <span className="el one">Koshkarov</span>
                                                </div>
                                            </div>
                                            <div className="bot">
                                                <div className="bot-one">
                                                    <span className="el one visible">frontend</span>
                                                    <span className="el two">₣ⱤØ₦₮Ɇ₦Đ</span>
                                                    <span className="el three">乍尺回几卞ヨ几句</span>
                                                    <span className="el four">FЯӨПƬΣПD</span>
                                                </div>
                                                <div className="bot-two">
                                                    <span className="el one">engineer</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="links">
                                            <div className="link">
                                                <a className="telega"
                                                   href="https://t.me/koshkarovnik"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                >
                                                    <span className="full">Telegram</span>
                                                    <span className="short">Tg</span>
                                                </a>
                                            </div>
                                            <div className="link">
                                                <a className="gmail"
                                                   href="mailto:koshkarovnik@gmail.com"
                                                >Mail
                                                </a>
                                            </div>
                                            <div className="link">
                                                <a className="github"
                                                   href="https://github.com/kolinscript"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                >Git
                                                </a>
                                            </div>
                                        </div>

                                        <div className="cta">scroll down</div>
                                    </div>

                                    <div className={this.state.qrCodeShow ? 'qr-code show' : 'qr-code'}>
                                        <a className="code" onClick={this.showQrCOde}></a>
                                    </div>
                                </div>

                                <div className="item two">
                                    <div className="block">
                                        <h1>skills</h1>

                                        <div className="about">
                                            <div className="text">
                                                More than a 4 years experience in web development, creating web applications, stores, services and landing pages for big and not so customers in several companies. Focused on <a className="angular" href="https://angular.io" target="_blank" rel="noopener noreferrer">Angular</a> (about 3+ years exp.) or <a className="react" href="https://reactjs.com" target="_blank" rel="noopener noreferrer">React</a> projects, i write clean, high-performance code.
                                            </div>
                                        </div>

                                        <div className="technologies">
                                            <div className="tec js"></div>
                                            <div className="tec ts"></div>
                                            <div className="tec html"></div>
                                            <div className="tec css"></div>
                                            <div className="tec angular"></div>
                                            <div className="tec react"></div>
                                            <div className="tec node"></div>
                                            <div className="tec mongo"></div>
                                            <div className="tec raspberry"></div>
                                        </div>

                                        <div className="icon-dev"></div>

                                        <div className="skills-block">
                                            <div className="skill">
                                                <div className="s-title">Java Script</div>
                                                <div className="s-icon"></div>
                                            </div>
                                            <div className="skill">
                                                <div className="s-title">HTML</div>
                                                <div className="s-icon"></div>
                                            </div>
                                            <div className="skill">
                                                <div className="s-title">CSS</div>
                                                <div className="s-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item three">
                                    <div className="block">
                                        <h1>works</h1>
                                        <div className="about">
                                            <div className="text">
                                                During my journey as a frontend developer, I did a tons of works, a very little bit of it which you can see here.
                                            </div>
                                        </div>
                                        <div className="works-block">
                                            <div className="works-titles">
                                                <div className="work-title-item">
                                                    <div className="w-icon pixcollector"></div>
                                                    <div className="w-title">Pixcollector</div>
                                                </div>
                                               <div className="work-title-item active">
                                                   <div className="w-icon traktrain"></div>
                                                   <div className="w-title">Traktrain Widget</div>
                                               </div>
                                                <div className="work-title-item">
                                                    <div className="w-icon quadratix"></div>
                                                    <div className="w-title">Quadratix</div>
                                                </div>
                                            </div>
                                            <div className="works-content">
                                                <div className="work-content-item">
                                                    <div className="wrapper">
                                                        <div className="opener opened">
                                                            <iframe src="https://traktrain-widget.herokuapp.com"
                                                                    frameBorder="0" width="100%" height="100%"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item fish">
                                    🚧
                                    <span className="title">CAUTION</span>
                                    <span className="subtitle">the page is under construction</span>
                                    <span className="to-top" onClick={this.goToTop}>go to top</span>
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
