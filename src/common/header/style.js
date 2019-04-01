import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position:relative
    border-bottom: 1px solid #f0f0f0;
    height:56px;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    border-bottom: 1px solid #f0f0f0;
    display:block;
    width:50px;
    height:50px;
    background: url(${logoPic});
    background-size: contain;
    
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    border-right: 1px solid #ccc;
    padding: 0 15px;
    font-size: 17px;
    color: #333
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &:hover{
        color: #1890ff;
        cursor: pointer;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '站内搜索'
})`
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        
    }
    width:160px;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    font-size:14px;
    color: #666;
    background: #eee;
    &::placeholder{
        color: #999
    }
    &.focused { 
        width: 250px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top:56px ;
    width: 300px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
 
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor: pointer;
`
export const SearchInfoItem = styled.a`
    display: block;
    float:left;
    font-size:12px;
    line-height:20px;
    padding: 0 5px;
    border:1px solid #ddd;
    color:#787878;
    border-radius: 3px;
    margin-right:10px;
    margin-bottom:10px;
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float:right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius:19px;
    border:1px solid #1890ff
    font-size:14px;
    &.reg {
        color: #1890ff
    }
    &.writting {
        color: #fff;
        background: #1890ff
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .iconfont {
        position: absolute;
        right: 5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        bottom: 5px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;