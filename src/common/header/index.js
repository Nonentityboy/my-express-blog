import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchWrapper
} from './style';

class Header extends Component {
    getListArea() {
        const { focused, list } = this.props;

        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch></SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        // 写成无状态组件 性能比较好
        const { list, login, logout, focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/detail'>
                        <NavItem className='left'>案件信息管理</NavItem>
                    </Link>
                    <NavItem className='left'>案件侦办管理</NavItem>
                    <NavItem className='left'>法律文书索引</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6dd;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            个人中心
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// immutable 不能通过.进行调用 
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list)
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
