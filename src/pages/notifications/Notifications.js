import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
    Row,
    Col,
    Button, Icon,
    Collapse,
    CardTitle,
    TabContent,
    TabPane,
    Breadcrumb,
    BreadcrumbItem,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import classnames from 'classnames';

import haykAudio from "../tables/audios/hayk.mp3";
import jannaAudio from "../tables/audios/zhanna.mp3";

/* eslint-disable */

import Widget from '../../components/Widget';

import s from './Notifications.scss';


class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.state = {
            activeTab : '1',
            collapse  : false
        };
    }

    toggle1(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab : tab,
                collapse  : false
            });
        }
    }


    toggle() {
        this.setState({collapse : !this.state.collapse});
    }

    render() {

        const data = [
            {
                name        : "Սերգեյ Դովլաթով «Արգելոց»",
                audioPath   : haykAudio,
                description : "Ժանր՝ պատմվածք \n" +
                "Գրվել է՝ 1977-1983թթ.\n" +
                "Բնօրինակի լեզուն՝ Ռուսերեն\n" +
                "«Արգելոց»-ը Սերգեյ Դովլաթովի ստեղծագործությունն է, որի սյուժեի կենտրոնում լենինգրադյան ինտելիգենտ Բոբն է, ով Պուշկինի թանգարանում աշխատանքի է տեղավորվում որպես էքսկուրսավար։"
            },
            {
                name        : "Սերգեյ Դովլաթով «Մերոնք»",
                audioPath   : jannaAudio,
                description : "Ժանր՝ պատմվածքների ժողովածու\n" +
                "հրատարակվել է՝ 1983թ.\n" +
                "Բնօրինակի լեզուն՝ Ռուսերեն\n" +
                "«Մերոնք» ժողովածուն կազմված է 12 տեքստից, որոնք միավորված են մեկ ամբողջական շարքի մեջ։ Պատմվածքները սկզբից հղացված և տպագրված են եղել որպես առանձին փոքրիկ նովելներ, դրանց հերոսները հեղինակի ազգականներն են։"
            }
        ];

        return (
            <div className={s.root}>
                <Breadcrumb>
                    <BreadcrumbItem>Այժմ գտնվում եք</BreadcrumbItem>
                    <BreadcrumbItem active>Ռադիո-գիրք բաժնում</BreadcrumbItem>
                </Breadcrumb>
                <h1 className="page-title mb-lg">Ռադիո գիրք</h1>
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active : this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle1('1');
                                }}
                            >
                                Հայ գրականություն
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active : this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle1('2');
                                }}
                            >
                                Արտասահմանյան գրականություն
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active : this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle1('3');
                                }}
                            >
                                Թարգմանություններ
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({first : !this.state.first})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>

                                    <Collapse isOpen={this.state.first}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({second : !this.state.second})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>
                                    <Collapse isOpen={this.state.second}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({third : !this.state.third})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>
                                    </div>
                                    <Collapse isOpen={this.state.third}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({four : !this.state.four})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>
                                    <Collapse isOpen={this.state.four}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({five : !this.state.five})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>
                                    </div>
                                    <Collapse isOpen={this.state.five}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({six : !this.state.six})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>
                                    <Collapse isOpen={this.state.six}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>


                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({seven : !this.state.seven})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>
                                    </div>
                                    <Collapse isOpen={this.state.seven}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({nine : !this.state.nine})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>
                                    <Collapse isOpen={this.state.nine}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({ten : !this.state.ten})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>
                                    </div>
                                    <Collapse isOpen={this.state.ten}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12">
                                    <div style={{
                                        display             : "grid",
                                        gridTemplateColumns : "200px 301px 115px",
                                        justifyItems        : "center",
                                        alignItems          : 'center',
                                        gridGap             : "1em"
                                    }}>
                                        <div style={{
                                            background : '#1ab394',
                                            color      : "white",
                                            padding    : "0.375rem 0.75rem"
                                        }}>
                                            <span className={s.label}>{data[0].name}</span>
                                        </div>
                                        <audio controls src={data[0].audioPath} style={{
                                            margin : '1rem'
                                        }}/>
                                        <Button color="primary" onClick={e => {
                                            this.setState({hoo : !this.state.hoo})
                                        }} style={{
                                            height : 31.5,
                                            margin : '1rem'
                                        }}>
                                            Մանրամասներ
                                        </Button>


                                    </div>

                                    <Collapse isOpen={this.state.hoo}>
                                        <Card>
                                            <CardBody>
                                                {data[0].description.split('\n').map((item, key) => {
                                                    return <div style={{
                                                        textAlign : "left",
                                                        fontSize  : '16px'
                                                    }} key={key}>{item}</div>
                                                })}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Notifications);
