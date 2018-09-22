import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Col,
} from 'reactstrap';

const Typography = () => {
    const value = "Մշակութային ռադիո. մենք աշխատում ենք offline և տրամադրում ենք միայն ինտերնետային հեռարձակումներ: \n" +
        "Այստեղ Դուք կարող եք ծանոթանալ կինոարվեստի վերջին նորություններին, լսել քննարկումներ, թողնել Ձեր մեկնաբանությունները և կապ հաստատել մեր թիմի անդամների հետ: \n" +
        "Եթերաշարերի հյուրերն են տարբեր ոլորտի մասնագետներ՝ լրագրողներ, մանկավարժներ, ռեժիսորներ, ծրագրավորողներ, որոնք անտարբեր չեն կինոինդուստրիայի և, առհասարակ, մշակույթի հանդեպ: Նրանց միջոցով ունկնդիրը ոչ միայն կտեղեկանա մշակութային նորություններին, այլև կծանոթանա հյուրի նախասիրություններին, սիրած ֆիլմերին և այլն:    \n" +
        "Հաղորդումների ընթացքում մենք զրուցում ենք արդիական թեմաներից, քննարկում նոր ֆիլմեր:\n" +
        "Հաղորդավարի և հյուրերի լեզուն պարզ է և հասկանալի բոլորին:\n" +
        "Եթե տվյալ պահին զբաղված եք, ցանկանում եք ավելի ուշ դիտել կամ լսել մեր հաղորդումները, ապա կարող եք ներբեռնալ նախընտրելի հաղորդումը աուդիո կամ վիդեո տարբերակով: \n      \n" +
        "Մշակութային ռադիոյի առաջին հաղորդումը ձայնագրվել է 2018 թվականի փետրվարի 8-ին:";

    return <div>
        <Breadcrumb>
            <BreadcrumbItem>Այժմ գտնվում եք</BreadcrumbItem>
            <BreadcrumbItem active>Մեր Մասին բաժնում</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg">Մեր Մասին</h1>

        {value.split('\n').map((item, key) => <h3 style={{
                textAlign : "left"
            }} key={key}>
                {item}</h3>)}
    </div>;
};

export default Typography;