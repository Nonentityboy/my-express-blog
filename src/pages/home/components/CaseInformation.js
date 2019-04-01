import React, { PureComponent } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';




class CaseInformation extends PureComponent {
    componentDidMount() {
        this.drawCharts(this.refs.chart)
    }

    drawCharts(chart) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(chart);
        // 绘制图表
        myChart.setOption({
            title: { text: '案件发生排行' },
            tooltip: {},
            xAxis: {
                data: ["陕西", "宁夏", "甘肃", "北京", "上海", "广东", "山东", "新疆"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [24, 22, 15, 9, 8, 6, 5, 5]
            }]
        });
    }

    render() {
        return (
            <div ref="chart" style={{ width: 600, height: 400 }}></div>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})



export default connect(mapState, null)(CaseInformation);