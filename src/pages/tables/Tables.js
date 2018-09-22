import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
// In your render() function:
import {
    Row,
    Col,
    Table,
    Progress,
    Button,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Input,
    Label,
    Badge, CustomInput,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import {Sparklines, SparklinesBars} from 'react-sparklines';
import kino from "./kino.png";
import haykImg from "./photos/hayk.jpg";
import levonImg from "./photos/levon.jpg";
import jannaImg from "./photos/janna.jpg";
import edgarImg from "./photos/edgar.jpg";
import mherImg from "./photos/mher.jpg";
import tigranImg from "./photos/tigran.jpg";

import haykAudio from "./audios/hayk.mp3";
import jannaAudio from "./audios/zhanna.mp3";
import mherAudio from "./audios/mher.mp3";
import tigranAudio from "./audios/tigran.mp3";
import edgarAudio from"./audios/edgar.mp3";
import edgarEvHaykAudio from "./audios/edgarEvhayk.mp3";
import levonEvTigranAudio from "./audios/levonEvtigran.mp3";
import ledibrdAudio from "./audios/ledibrd.mp3"
import martinAudio from "./audios/martin.mp3";
import ampopumAudio from "./audios/ampopum.mp3";

import haykVideo from "./videos/hayk.mp4";
import edgarVideo from "./videos/edgar.mp4";
import edgarEvHaykVideo from "./videos/haykEVedgar.mp4"
import mherVideo from "./videos/mher.mp4";
import tigranVideo from "./videos/tigran.mp4";
import tigranEvLevonVideo from "./videos/tigranEvLevon.mp4";
import jannaVideo from "./videos/zhanna.mp4"
import ledibrdVideo from "./videos/ledibrd.mp4"
import martinVideo from "./videos/martin.mp4";
import ampopumVideo from "./videos/ampopum.mp4";

import Widget from '../../components/Widget';
import s from './Static.scss';


const guestList = {
    janna : {
        name        : "Ժաննա Ավագյան",
        img         : jannaImg,
        description : "Լրագրող",
        data        : [
            {
                date        : "8/02/2018",
                audioPath   : jannaAudio,
                name        : "Օսկար 2018. Անդրեյ Զվյագինցև «Չսեր»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ Ռուսաստան\n" +
                "Ռեժիսոր՝Անդրեյ Զվյագինցեվ\n" +
                "Ժանր՝ դրամա \n" +
                "Գլխավոր դերերում՝ Մարյանա Սպիվակ, Ալեքսեյ Ռոզին, Մատվեյ Նովիկով\n" +
                "Սա մի ընտանիքի պատմություն է, որը կարևոր փուլ պիտի անցնի` ամուսինները բաժանվում են: 12 տարի համատեղ կյանքից հետո նրանք ցանկանում են ամեն ինչ սկսել զրոյից: Սակայն մնացել է մի խանգարող բեռ անցյալից` նրանց որդին: Տղան, զգալով ծնողների անտարբերությունը, օտարությունը, մի օր ուղղակի անհետանում է:",
                videoPath   : jannaVideo
            }
        ]
    },
    hayk  : {
        name        : "Հայկ Հովհաննիսյան",
        img         : haykImg,
        description : "Լրագրող",
        data        : [
            {
                date        : "16/02/2018",
                audioPath   : haykAudio,
                name        : "Օսկար 2018. Քրիստոֆեր Նոլան «Դյունկերկ»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ Մեծ Բրիտանիա, Նիդերլանդներ, Ֆրանսիա\n" +
                "Ռեժիսոր՝ Քրիստոֆեր Նոլան\n" +
                "Ժանր՝ պատերազմական, դրամա, պատմություն \n" +
                "Գլխավոր դերերում՝ Ֆինն ՈւայթՀեդ, Կիլլիան Մյորֆի, Մարկ Ռայլենս, Թոմ Հարդի\n" +
                "Ֆիլմի հիմքում ընկած է Դյունկերկյան «Դինամո» հայտնի գործողության պատմությունը: 1940 թվականին Չերչիլը որոշում է կայացնում ֆրանսիական Դյունկերկից Մեծ Բրիտանիա տարհանել բրիտանական, ֆրանսիական և բելգիական բանակի զինծառայողներին: Զինվորները փորձում են ողջ մնալ՝ մինչև կհասնի օգնությունը:",
                videoPath   : haykVideo
            },
            {
                date        : "18/02/2018",
                audioPath   : edgarEvHaykAudio,
                name        : "Օսկար 2018. Մարտին ՄաքԴոնա «Երեք բիլբորդ Էբինգի սահմանին, Միսուրի»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ Մեծ Բրիտանիա, ԱՄՆ \n" +
                "Ռեժիսոր՝ Մարտին ՄաքԴոնա\n" +
                "Ժանր՝ դրամա, կրիմինալ \n" +
                "Գլխավոր դերերում՝ Ֆրենսիս ՄաքԴոլմանդ, Սեմ Ռոքուել, Վուդի Հարելսոն \n" +
                "Ֆիլմի հերոսուհին՝ Միլդրեդը, ապրում է մտացածին քաղաքում՝ Էբինգում: Նրա դստերը բռնաբարել են, ապա դաժանաբար սպանել: Տեղի շերիֆը մի քանի ամիս առաջ գործ է հարուցել, սակայն կասկածյալի ԴՆԹ-ն չի համապատասխանում ոստիկանության բազայում առկա տվյալներին: Միլդրեդը սպանության վայրից ոչ այնքան հեռու վարձում է երեք բիլբորդ և մեղադրում շերիֆին անգործության մեջ: Միլդրեդին փորձում են ստիպել հանել բիլբորդները, սակայն նա չի ընկրկում: Շուտով վեճի հիմնական պատճառը մոռացվում է: Առաջ են գալիս սյուժետային նոր զարգացումներ:",
                videoPath   : edgarEvHaykVideo
            }
        ]
    },
    levon : {
        name        : "Լեւոն Իբրանյան",
        img         : levonImg,
        description : "Իրավաբան",
        data        : [
            {
                date        : "12/02/2018",
                audioPath   : levonEvTigranAudio,
                name        : "Օսկար 2018. Ջորդան Փիլ «Հեռացիր»",
                description : "Տարի՝ 2017\n" +
                "Եր`կիր՝ Ճապոնիա, ԱՄՆ\n" +
                "Ռեժիսոր՝ Ջորդան Փիլ\n" +
                "Ժանր՝ սարսափ, դետեկտիվ, թրիլլեր \n" +
                "Գլխավոր դերերում՝ Դենիել Կալուա, Էլիսոն Ուիլիամս, Քեթրին Քիներ\n" +
                "Սևամորթ Քրիս Վաշինգտոնը պատրաստվում է ծանոթանալ իր սպիտակամորթ ընկերուհու ՝Ռոուզի ծնողների հետ: Նրանք բարձր խավի ներկայացուցիչներ են, հարուստ են և ապրում են քաղաքից դուրս՝ սեփական տանը: Նրանք ունեն նաև սևամորթ ծառաներ. տունը միշտ մարդաշատ է: Ռոուզի ծնողների հյուրերը Քրիսին տարօրինակ են թվում: Ֆիլմի ընթացքում հասկանալի է դառնում՝ ինչու:",
                videoPath   : tigranEvLevonVideo
            },
            {
                date        : "14/02/2018",
                audioPath   : ledibrdAudio,
                name        : "Օսկար 2018. Գրետա Գերվիգ «Լեդի Բըրդ»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ ԱՄՆ\n" +
                "Ռեժիսոր՝ Գրետա Գերվիկ \n" +
                "Ժանր՝ դրամա, կատակերգություն \n" +
                "Գլխավոր դերերում՝ Սիրշա Ռոնան, Լորի Մետկաֆ, Թրեյսի Լեթս\n" +
                "Քրիստինա Մակֆերսոնը սովորում է Սակրամենտոյում՝ կաթոլիկական դպրոցում: Նա փնտրում է ինքն իրեն, փորձում է տարբերվել հասակակիցներից: Քրիստինան պահանջում է, որ բոլորն իրեն Լեդի Բըրդ անվանեն: Նրա երազանքն է փախչել Սակրամենտոյից և սովորել Նյու Յորքում: Աղջիկը  հաճախ վիճում է մոր հետ, սիրահարվում է, հիասթափվում է, կարճ ասած՝  ապրում է սովորական 17-ամյա դեռահասի կյանքով:",
                videoPath   : ledibrdVideo
            }
        ]
    },
    edgar : {
        name        : "Էդգար Մարկոսյան",
        img         : edgarImg,
        description : "Ծրագրավորող",
        data        : [
            {
                date        : "24/02/2018",
                audioPath   : edgarAudio,
                name        : "Օսկար 2018. Պոլ Թոմաս Անդերսոն «Տեսիլքային կապ»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ ԱՄՆ \n" +
                "Ռեժիսոր՝ Փոլ Թոմաս Անդերսոն\n" +
                "Ժանր՝ դրամա, մելոդրամա \n" +
                "Գլխավոր դերերում՝ Դենիել Դեյ-Լյուիս, Լեսլի Մենվիլ, Վիկի Քրիփս\n" +
                "1950-ական թվականներին հայտնի մոդելյեր Ռեյնոլդս Վուդկոկը ստեղծում է անիրական գեղեցկության զգեստներ թագավորական ընտանիքի անդամների, կինոյի աստղերի, հարուստ տիկնանց համար: Նա ապրում է քրոջ հետ, որը կարգավորում է եղբոր ֆինանսական հարցերը: Հանճարի կյանքը հիմնովին փոխվում է, երբ հայտնվում է երիտասարդ Ալման, որը դառնում է Ռեյնոլդսի մուսան:",
                videoPath   : edgarVideo
            },
            {
                date        : "18/02/2018",
                audioPath   : edgarEvHaykAudio,
                name        : "Օսկար 2018. Մարտին ՄաքԴոնա «Երեք բիլբորդ Էբինգի սահմանին, Միսուրի»",
                description : "Տարի՝ 2017\n" +
                "Երկիր՝ Մեծ Բրիտանիա, ԱՄՆ \n" +
                "Ռեժիսոր՝ Մարտին ՄաքԴոնա\n" +
                "Ժանր՝ դրամա, կրիմինալ \n" +
                "Գլխավոր դերերում՝ Ֆրենսիս ՄաքԴոլմանդ, Սեմ Ռոքուել, Վուդի Հարելսոն \n" +
                "Ֆիլմի հերոսուհին՝ Միլդրեդը, ապրում է մտացածին քաղաքում՝ Էբինգում: Նրա դստերը բռնաբարել են, ապա դաժանաբար սպանել: Տեղի շերիֆը մի քանի ամիս առաջ գործ է հարուցել, սակայն կասկածյալի ԴՆԹ-ն չի համապատասխանում ոստիկանության բազայում առկա տվյալներին: Միլդրեդը սպանության վայրից ոչ այնքան հեռու վարձում է երեք բիլբորդ և մեղադրում շերիֆին անգործության մեջ: Միլդրեդին փորձում են ստիպել հանել բիլբորդները, սակայն նա չի ընկրկում: Շուտով վեճի հիմնական պատճառը մոռացվում է: Առաջ են գալիս սյուժետային նոր զարգացումներ:",
                videoPath   : edgarEvHaykVideo
            },
            {
                date        : "06/03/2018",
                audioPath   : ampopumAudio,
                name        : "Օսկար 2018. Ամփոփում",
                description : "Այս հաղորդման շրջանակներում ամփոփելու ենք 2018 թվականի մարտի 5-ին տեղի ունեցած «Օսկար» մրցանակաբաշխության արդյունքները:",
                videoPath   : ampopumVideo
            }
        ]
    }
};

class Tables extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            selectedGuest : "hayk",
            collapse      : false, status : 'Closed',
            tableStyles   : [
                {
                    id          : 1,
                    picture     : require('../../images/tables/1.jpg'), // eslint-disable-line global-require
                    description : 'Palo Alto',
                    info        : {
                        type       : 'JPEG',
                        dimensions : '200x150',
                    },
                    date        : new Date('September 14, 2012'),
                    size        : '45.6 KB',
                    progress    : {
                        percent    : 29,
                        colorClass : 'success',
                    },
                },
                {
                    id          : 2,
                    picture     : require('../../images/tables/2.jpg'), // eslint-disable-line global-require
                    description : 'The Sky',
                    info        : {
                        type       : 'PSD',
                        dimensions : '2400x1455',
                    },
                    date        : new Date('November 14, 2012'),
                    size        : '15.3 MB',
                    progress    : {
                        percent    : 33,
                        colorClass : 'warning',
                    },
                },
                {
                    id          : 3,
                    picture     : require('../../images/tables/3.jpg'), // eslint-disable-line global-require
                    description : 'Down the road',
                    label       : {
                        colorClass : 'success',
                        text       : 'INFO!',
                    },
                    info        : {
                        type       : 'JPEG',
                        dimensions : '200x150',
                    },
                    date        : new Date('September 14, 2012'),
                    size        : '49.0 KB',
                    progress    : {
                        percent    : 38,
                        colorClass : 'inverse',
                    },
                },
                {
                    id          : 4,
                    picture     : require('../../images/tables/4.jpg'), // eslint-disable-line global-require
                    description : 'The Edge',
                    info        : {
                        type       : 'PNG',
                        dimensions : '210x160',
                    },
                    date        : new Date('September 15, 2012'),
                    size        : '69.1 KB',
                    progress    : {
                        percent    : 17,
                        colorClass : 'danger',
                    },
                },
                {
                    id          : 5,
                    picture     : require('../../images/tables/5.jpg'), // eslint-disable-line global-require
                    description : 'Fortress',
                    info        : {
                        type       : 'JPEG',
                        dimensions : '1452x1320',
                    },
                    date        : new Date('October 1, 2012'),
                    size        : '2.3 MB',
                    progress    : {
                        percent    : 41,
                        colorClass : 'primary',
                    },
                },
            ],
            checkboxes1   : [false, true, false, false],
            checkboxes2   : [false, false, false, false, false, false],
            checkboxes3   : [false, false, false, false, false, false],
        };

        this.checkAll = this.checkAll.bind(this);
    }

    parseDate(date) {
        this.dateSet = date.toDateString().split(' ');
        return `${date.toLocaleString('en-us', {month : 'long'})} ${this.dateSet[2]}, ${this.dateSet[3]}`;
    }

    checkAll(ev, checkbox) {
        const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
        this.setState({
            [checkbox] : checkboxArr,
        });
    }

    onEntering() {
        this.setState({status : 'Opening...'});
    }

    onEntered() {
        this.setState({status : 'Opened'});
    }

    onExiting() {
        this.setState({status : 'Closing...'});
    }

    onExited() {
        this.setState({status : 'Closed'});
    }

    toggle() {
        this.setState({collapse : !this.state.collapse});
    }

    changeCheck(ev, checkbox, id) {
        this.state[checkbox][id] = ev.target.checked;
        if(!ev.target.checked) {
            this.state[checkbox][0] = false;
        }
        this.setState({
            [checkbox] : this.state[checkbox],
        });
    }

    render() {
        const that = this;


        return <div>
            <Breadcrumb>
                <BreadcrumbItem>Այժմ գտնվում եք</BreadcrumbItem>
                <BreadcrumbItem active>Կինո բաժնում</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="page-title mb-2">Կինո</h1>
            <Widget close collapse>
                <div style={{alignText : "left"}}>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}> Թեման՝ կինո
                    </div>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}> Հյուրերը՝ ֆիլմարվեստով հետաքրքրված մարդիկ
                    </div>
                    <br/>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>
                        <u>ԿԻՆՈ</u> բաժնում կարող եք լսել և դիտել Ձեզ հետաքրքրող ֆիլմերի քննարկումները, տեղեկանալ՝ ինչ ֆիլմեր են
                        հայտնվում էկրաններին, բացահայտել Ձեզ նախկինում անհայտ անուններ ու ժանրեր:
                    </div>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>
                        Մենք կպատմենք
                        փառատոններում հայտնված և հաղթարշավից դուրս մնացած ֆիլմերի մասին:
                    </div>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>
                        Մենք չենք քննադատում, մենք փաստում ենք: Քննարկվող ֆիլմերը բազմաժանր են՝ դրամա, մելոդրամա, թրիլլեր,
                        դետեկտիվ, պատմական, կենսագրական, անիմացիոն, արտ հաուս:
                    </div>
                    <br/>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>
                        <u>Մշակութային ռադիոյի</u> հյուրերի օգնությամբ կիմանաք, թե ինչպես է նկարահանվել այս կամ այն ֆիլմը, ինչ
                        դժվարությունների է բախվել նկարահանող խումբը, ինչպես են դերասանները պայքարում բաղձալի արձանիկի
                        համար, և արդյոք միշտ են արդարացված կինոակադեմիայի որոշումները:
                    </div>
                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>Ներկայացված աուդիո և վիդեոնյութերը կարող եք ներբեռնել և լսել օրվա յուրաքանչյուր ժամի:
                    </div>

                    <div style={{
                        textAlign : "left",
                        fontSize  : '14px'
                    }}>Բարի դիտում և ունկնդրում :)
                    </div>
                </div>
            </Widget>

            <div style={{
                display             : "grid",
                gridTemplateColumns : "1fr 1fr 1fr 1fr",
                gridGap             : '1em',
                justifyItems        : 'center',
                alignItem           : 'center',
                marginBottom        : 30
            }}>
                <div style={{
                    display      : "grid",
                    justifyItems : 'center',
                    alignItem    : 'center'
                }}>
                    <img onClick={e => {
                        that.setState({selectedGuest : "hayk"})
                    }} className={cx('rounded-circle mr-sm', s.adminPhoto)} src={haykImg}/>
                    <CustomInput type="radio" id="hayk" readOnly checked={that.state.selectedGuest === "hayk"} name="customRadio"/>
                </div>
                <div style={{
                    display      : "grid",
                    justifyItems : 'center',
                    alignItem    : 'center'
                }}>
                    <img onClick={e => {
                        that.setState({selectedGuest : "janna"})
                    }} className={cx('rounded-circle mr-sm', s.adminPhoto)} src={jannaImg}/>
                    <CustomInput type="radio" id="janna" readOnly checked={that.state.selectedGuest === "janna"} name="customRadio"/>
                </div>
                <div style={{
                    display      : "grid",
                    justifyItems : 'center',
                    alignItem    : 'center'
                }}>
                    <img onClick={e => {
                        that.setState({selectedGuest : "levon"})
                    }} className={cx('rounded-circle mr-sm', s.adminPhoto)} src={levonImg}/>
                    <CustomInput type="radio" id="levon" readOnly checked={that.state.selectedGuest === "levon"} name="customRadio"/>
                </div>
                <div style={{
                    display      : "grid",
                    justifyItems : 'center',
                    alignItem    : 'center'
                }}>
                    <img onClick={e => {
                        that.setState({selectedGuest : "edgar"})
                    }} className={cx('rounded-circle mr-sm', s.adminPhoto)} src={edgarImg}/>
                    <CustomInput type="radio" id="edgar" readOnly checked={that.state.selectedGuest === "edgar"} name="customRadio"/>
                </div>
            </div>


            {guestList[that.state.selectedGuest] ? guestList[that.state.selectedGuest].data.map((data, index) => <Widget close collapse key={index}>

                    <audio controls src={data.audioPath} style={{display : 'block', float : "right"}}/>

                    <span style={{
                        paddingRight : 10
                    }}>{data.date}</span>
                    <span style={{
                        fontSize : '17px'
                    }}>{data.name}</span>

                    {data.description.split('\n').map((item, key) => <div style={{
                            textAlign : "left",
                            fontSize  : '16px'
                        }} key={key}>{item === "Վան Գոգի կրքերը" || item === "Կոկոյի գաղտնիքը" ?
                            <h3>{item}</h3> : item}</div>)}
                </Widget>) : null}

        </div>;
    }

}

export default withStyles(s)(Tables);
