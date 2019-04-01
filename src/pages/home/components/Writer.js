import React, { PureComponent } from 'react';
import { WriterWrapper, WriterHeader, WriterBody, WriterContent, WriterHeaderLeft, WriterHeaderRight } from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterHeader>
                    <WriterHeaderLeft>即时新闻精选</WriterHeaderLeft>
                    <WriterHeaderRight><a href='http://www.ganews.tv/'>更多</a></WriterHeaderRight>
                </WriterHeader>
                <WriterBody>
                    <WriterContent>
                        <a href='http://www.chinanews.com/mil/2019/03-28/8793682.shtml' >中国第二艘航母何时服役？</a>
                    </WriterContent>
                </WriterBody>
            </WriterWrapper>
        )
    }
}

export default Writer;