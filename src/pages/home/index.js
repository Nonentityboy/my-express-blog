import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
//import List from './components/List';
import Topic from './components/Topic';
import CaseInformation from './components/CaseInformation';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store'

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0); 
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    {/* <img
                        className='banner-img'
                        alt='banner-img'
                        src="//upload.jianshu.io/admin_banners/web_images/4619/667c4f9446720ed3a12690580eb534cef8b58192.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
                    </img> */}
                    <CaseInformation />
                    <Topic />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>
                    ^
                    </BackTop> : null}

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);