import styled from 'styled-components';

export const HomeWrapper = styled.div`
    padding-top:30px;
    width: 960px;
    margin:0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    width: 625px;
    float: left;
    .banner-img {
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-right: 10px;
    font-size: 12px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float:left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color:#333;
    }
    .desc {
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`

export const ListItem = styled.div`
overflow:hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        display: block;
        height: 100px;
        float: right;
    }
`

export const RecommendWrapper = styled.div`
margin:  0 0 50px 0;
    width: 280px;  
`

export const RecommendItem = styled.div`
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    width: 280px;
`

export const WriterWrapper = styled.div`
    overflow: hidden;
    width: 278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    margin-bottom:98px;
`

export const WriterHeader = styled.div`
    top:0;
    border-radius:3px;
    height:40px;
    line-height:40px;
    padding-left:20px;
    background: #1890ff;
    color:#ccc;
`

export const WriterHeaderLeft = styled.div`
    float:left;
`

export const WriterHeaderRight = styled.div`
    float:right;
    padding-right:20px;
    font-weight:bold;
`

export const WriterBody = styled.div`
    height:260px;
`

export const WriterContent = styled.div`
    padding-left:20px;
    height:30px;
    line-height:30px;
`

export const BottomWrapper = styled.div`
    overflow: hidden;
    width: 600px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
`

export const BottomHeader = styled.div`
    top:0;
    border-radius:3px;
    height:40px;
    line-height:40px;
    padding-left:20px;
    background: #1890ff;
    color:#ccc;
`

export const BottomHeaderLeft = styled.div`
    float:left;
`

export const BottomHeaderRight = styled.div`
    float:right;
    padding-right:20px;
    font-weight:bold;
`

export const BottomBody = styled.div`
    height:260px;
`

export const BottomContent = styled.div`
    padding-left:20px;
    height:30px;
    line-height:30px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius:  20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`