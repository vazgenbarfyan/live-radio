import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {
    Breadcrumb,
    BreadcrumbItem,
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
} from "reactstrap";

import {fetchPosts} from "../../actions/posts";
import s from "./Dashboard.scss";


const items = [
    {
        caption : "Օսկար 2018. հայտնի են բոլոր հավակնորդները",
        src     : "http://s1.cdnnz.net/var/article/2018/02/15/oscar_lunch.jpg",
        pageURL : "http://www.oscars.org/oscars/ceremonies/2018",
    }, {
        caption : "And the Oscar goes to…",
        src     : "https://cdn1.thr.com/sites/default/files/imagecache/list_landscape_960x541/2018/01/best_picture_new-split-h_2018.jpg",
        pageURL : "https://www.kinopoisk.ru/news/3112795/",
    }, {
        caption : "Օլդմանը՝ գլխավոր հավակնորդ",
        src     : "https://i.ytimg.com/vi/VLT6DvOXhB4/maxresdefault.jpg",
        pageURL : "https://www.kinopoisk.ru/film/temnye-vremena-2017-972777/",
    }, {
        caption : "5 կարևոր հարց Օսկարի մասին",
        src     : "http://www.spletnik.ru/img/2018/02/liza/22022018-oscar-post.jpg",
        pageURL : "http://www.spletnik.ru/buzz/81075-oscar-2018-5-voprosov-o-gryadushcey-tceremonii.html",
    }, {
        caption : "Օսկար-2018. Թիզեր",
        src     : "http://www.oscars.org/sites/oscars/files/styles/news_image_default/public/jimmyannouncement_website.jpg.jpeg?itok=kxquMKR5",
        pageURL : "https://www.kinonews.ru/trailers15899/"
    }, {
        caption : "Նոլանի Դյունկերկը համեմատել են արխիվային կադրերի հետ",
        src     : "https://cdn.vox-cdn.com/thumbor/F1NyPsW3tsW5cVFXL8DNVTPq0dM=/228x0:1551x744/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55826029/dunkirk6.0.jpg",
        pageURL : "https://www.kinopoisk.ru/news/3098423/"
    }, {
        caption : "Լեդի Բըրդը՝ տարվա հայտնություն",
        src     : "https://st.kp.yandex.net/images/article/sm_3042183_02_201709170131078473.jpg",
        pageURL : "https://www.kinopoisk.ru/article/3042183/"
    }, {
        caption : "Ես Տոնյան եմ. Հարլի Քուինը դահուկների վրա",
        src     : "https://st.kp.yandex.net/images/article/sm_3042182_03_201709170818589199.jpg",
        pageURL : "https://www.kinopoisk.ru/article/3042182/"
    }, {
        caption : "Դենիել Դեյ Լյուիսը բացատրում է՝ ինչու է հեռանում կինոաշխարհից",
        src     : "http://torontofilmcritics.com/wp-content/uploads/2018/01/phantom-thread-1024x576.jpg",
        pageURL : "https://www.kinopoisk.ru/news/3081651/"
    }, {
        caption : "Պոլ Թոմաս Անդերսոնի և  Դեյ Լյուիսի համատեղ գլուխգործոցը. Տեսիլքային կապ",
        src     : "https://st.kp.yandex.net/images/interview/sm_3125757_02_201802160657495659.jpg",
        pageURL : "https://www.kinopoisk.ru/interview/3125757/",

    }, {
        caption : "Մարտին Մակդոնան՝ հիմար անվանման և ֆիլմում չհայտնված կադրերի մասին",
        src     : "https://st.kp.yandex.net/images/interview/sm_3120323_04_201802030113543235.jpg",
        pageURL : "https://www.kinopoisk.ru/interview/3120323/",

    }, {
        caption : "Ֆրենսիս ՄակԴորմանդ. “Ես  60 տարեկան եմ, մեծացել եմ Ամերիկայում, և ինձ բոլորն արդեն նյարդայնացնում են”",
        src     : "https://st.kp.yandex.net/images/interview/sm_3119513_05_201802020204305244.jpg",
        pageURL : "https://www.kinopoisk.ru/interview/3119513/",
    }];

const itemsss = [
    {
        src     : 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText : 'Slide 1',
        caption : 'Slide 1'
    },
    {
        src     : 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText : 'Slide 2',
        caption : 'Slide 2'
    },
    {
        src     : 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText : 'Slide 3',
        caption : 'Slide 3'
    }
];

class Dashboard extends Component {
    /* eslint-disable */
    static propTypes = {
        posts      : PropTypes.any,
        isFetching : PropTypes.bool,
        dispatch   : PropTypes.func.isRequired,
    };
    /* eslint-enable */

    static defaultProps = {
        posts      : [],
        isFetching : false,
    };

    constructor(props) {
        super(props);
        this.state = {activeIndex : 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex : nextIndex});
    }

    previous() {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex : nextIndex});
    }

    goToIndex(newIndex) {
        if(this.animating) return;
        this.setState({activeIndex : newIndex});
    }

    componentWillMount() {
        this.props.dispatch(fetchPosts());
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            isDropdownOpened : !prevState.isDropdownOpened,
        }));
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} height="500px" width="100%" alt={item.altText}/>
                    <a href={item.pageURL}>
                        <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
                    </a>
                </CarouselItem>
            ));


        return (
            <div className={s.root}>
                <Breadcrumb>
                    <BreadcrumbItem>Այժմ գտնվում եք</BreadcrumbItem>
                    <BreadcrumbItem active>Նորություններ բաժնում</BreadcrumbItem>
                </Breadcrumb>
                <h1 className="mb-lg">Նորություններ</h1>

                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                </Carousel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching : state.posts.isFetching,
        posts      : state.posts.posts,
    };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));

//
// <Row>
//     <Col sm={12} md={6}>
//         <Widget
//             title={
//                 <div>
//                     <div className="pull-right mt-n-xs">
//                         <input
//                             type="search"
//                             placeholder="Search..."
//                             className="form-control input-sm"
//                         />
//                     </div>
//                     <h5 className="mt-0 mb-3">
//                         <i className="fa fa-user mr-xs opacity-70"/>{' '}
//                         Users
//                     </h5>
//                 </div>
//             }
//         >
//             <Table responsive borderless className={cx('mb-0', s.usersTable)}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>Alice</td>
//                         <td>alice@email.com</td>
//                         <td>
//                             <span className="py-0 px-1 bg-success rounded text-white">active</span>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>2</td>
//                         <td>Bob</td>
//                         <td>bob@email.com</td>
//                         <td>
//                             <span className="py-0 px-1 bg-warning rounded text-white">delayed</span>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>3</td>
//                         <td>Duck</td>
//                         <td>duck@email.com</td>
//                         <td>
//                             <span className="py-0 px-1 bg-success rounded text-white">active</span>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>4</td>
//                         <td>Shepherd</td>
//                         <td>shepherd@email.com</td>
//                         <td>
//                             <span className="py-0 px-1 bg-danger rounded text-white">removed</span>
//                         </td>
//                     </tr>
//                 </tbody>
//             </Table>
//         </Widget>
//     </Col>
//     <Col sm={12} md={6}>
//         <Widget title="Alerts">
//             <Alert
//                 className="alert-sm"
//                 color="warning"
//             >
//                 <span className="fw-semi-bold">Warning:</span> Best check yo
//                 self, you&#39;re not looking too good.
//             </Alert>
//             <Alert
//                 className="alert-sm"
//                 color="success"
//             >
//                 <span className="fw-semi-bold">Success:</span> You successfully
//                 read this important alert message.
//             </Alert>
//             <Alert
//                 className="alert-sm"
//                 color="info"
//             >
//                 <span className="fw-semi-bold">Info:</span> This alert needs
//                 your attention, but it&#39;s not super important.
//             </Alert>
//             <Alert
//                 className="alert-sm clearfix"
//                 color="danger"
//             >
//                 <span className="fw-semi-bold">Danger:</span> Change this and
//                 that and try again.
//                 <span className="pull-right mr-sm">
//                   <Button color="danger" size="sm">
//                     Take this action
//                   </Button>
//                   <span className="px-2"> or </span>
//                   <Button color="default" size="sm">Cancel</Button>
//                 </span>
//             </Alert>
//         </Widget>
//     </Col>
// </Row>
// <Row>
// <Col sm={6}>
//     <Widget
// title={
// <div>
//     <div className="pull-right mt-n-xs">
//         {/* eslint-disable */}
//         <a href="#" className="td-underline fs-sm">
//             Options
//         </a>
//         {/* eslint-enable */}
//     </div>
//     <h5 className="mt-0 mb-0">
//         Recent posts{' '}
//         <Badge color="success" className="ml-xs">
//             5
//         </Badge>
//     </h5>
//     <p className="fs-sm mb-0 text-muted">
//         posts, that have been published recently
//     </p>
// </div>
// }
// >
// <table className="table table-sm table-no-border mb-0">
//     <tbody>
//     {this.props.posts &&
//     this.props.posts.map(post => (
//         <tr key={post.id}>
//             <td>{new Date(post.updatedAt).toLocaleString()}</td>
//             <td>
//                 <Link to="/app/posts">{post.title}</Link>
//             </td>
//         </tr>
//     ))}
// {this.props.posts &&
// !this.props.posts.length && (
//     <tr>
//         <td colSpan="100">No posts yet</td>
//     </tr>
// )}
// {this.props.isFetching && (
//     <tr>
//         <td colSpan="100">Loading...</td>
//     </tr>
// )}
// </tbody>
// </table>
// </Widget>
// </Col>
// <Col sm={6}>
//     <ListGroup>
//         <Link to="/app" className="list-group-item">
//             <i className="fa fa-phone mr-xs text-secondary"/>{' '}
//             Incoming calls <Badge className="ml-xs" color="danger">3</Badge>
//         </Link>
//         <Link to="/app" className="list-group-item">
//             <i className="fa fa-bell-o mr-xs text-secondary"/>{' '}
//             Notifications <Badge className="ml-xs" color="warning">6</Badge>
//         </Link>
//         <Link to="/app" className="list-group-item">
//             <i className="fa fa-comment-o mr-xs text-secondary"/>{' '}
//             Messages <Badge className="ml-xs" color="success">18</Badge>
//         </Link>
//         <Link to="/app" className="list-group-item">
//             <i className="fa fa-eye mr-xs text-secondary"/>{' '}
//             Visits total
//         </Link>
//         <Link to="/app" className="list-group-item">
//             <i className="fa fa-cloud mr-xs text-secondary"/> Inbox{' '}
//         </Link>
//     </ListGroup>
// </Col>
// </Row>
// <Widget className="mt-lg" title="Some standard reactstrap components">
//     <Row>
//         <Col sm={6}>
//             <div className="mt">
//                 <Button size="sm" color="default" className="mr-sm mb-xs">
//                     Default
//                 </Button>
//                 <Button size="sm" color="success" className="mr-sm mb-xs">
//                     Success
//                 </Button>
//                 <Button size="sm" color="info" className="mr-sm mb-xs">
//                     Info
//                 </Button>
//                 <Button size="sm" color="warning" className="mr-sm mb-xs">
//                     Warning
//                 </Button>
//                 <Button size="sm" color="danger" className="mb-xs">
//                     Danger
//                 </Button>
//             </div>
//             <ButtonGroup className="mb">
//                 <Button color="default">1</Button>
//                 <Button color="default">2</Button>
//                 <ButtonDropdown isOpen={this.state.isDropdownOpened} toggle={this.toggleDropdown}>
//                     <DropdownToggle color="default" caret>
//                         Dropdown
//                     </DropdownToggle>
//                     <DropdownMenu>
//                     <DropdownItem>1</DropdownItem>
//                     <DropdownItem>2</DropdownItem>
//                     </DropdownMenu>
//                     </ButtonDropdown>
//                     </ButtonGroup>
//                     <p className="mb-0">
//                     For more components please checkout{' '}
//                     <a
//                         href="https://reactstrap.github.io/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         reactstrap documentation
//                     </a>
//                     </p>
//                     </Col>
//                     <Col sm={6}>
//                     <Progress className="progress-sm" color="success" value={40}/>
//                     <Progress className="progress-sm" color="info" value={20}/>
//                     <Progress className="progress-sm" color="warning" value={60}/>
//                     <Progress className="progress-sm" color="danger" value={80}/>
//                     </Col>
//                     </Row>
//                     </Widget>