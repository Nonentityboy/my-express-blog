import React, { PureComponent } from 'react';
import { WriterWrapper, WriterHeader, WriterBody, WriterContent, WriterHeaderLeft } from '../style';

class Recommend extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterHeader>
                    <WriterHeaderLeft>常用下载</WriterHeaderLeft>
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

export default Recommend;