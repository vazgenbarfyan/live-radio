import React, {PureComponent} from 'react';
import {Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';

import Widget from '../../components/Widget';

// Charts
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import PercentAreaChart from './charts/PercentAreaChart';
import PieChart from './charts/PieChart';

const data = [
    {name : 'Action', man : 40, woman : 25},
    {name : 'Comedy', man : 20, woman : 20},
    {name : 'Thriller', man : 17, woman : 13},
    {name : 'Science', man : 10, woman : 5},
    {name : 'Western', man : 10, woman : 10},
    {name : 'Romantic', man : 5, woman : 30}

];

const data2 = [
    {name : 'Van', man : 400, woman : 150},
    {name : 'Pulse', man : 210, woman : 150},
    {name : 'Aurora', man : 197, woman : 55},
    {name : 'Lebanon', man : 120, woman : 123},
    {name : 'ArmNet', man : 140, woman : 120},
    {name : 'Public', man : 15, woman : 160}

];

export default class Charts extends PureComponent {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>Այժմ գտնվում եք</BreadcrumbItem>
                    <BreadcrumbItem active>Անալիտիկա բաժնում</BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col xs={12} md={6}>
                        <Widget
                            title={
                                <span className="fw-semi-bold">The most popular radio channel in age between 18 and 40 </span>}>
                            <LineChart data={data2}/>
                        </Widget>
                    </Col>
                    <Col xs={12} md={6}>
                        <Widget
                            title={
                                <span className="fw-semi-bold">The most popular films by genre for men and women</span>}>
                            <BarChart data={data}/>
                        </Widget>
                    </Col>
                </Row>
            </div>
        )
    }
}