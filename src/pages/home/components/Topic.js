import React, { PureComponent } from 'react';
import { BottomWrapper, BottomHeader, BottomBody, BottomContent, BottomHeaderLeft } from '../style';

class Topic extends PureComponent {
    render() {
        return (
            <BottomWrapper>
                <BottomHeader>
                    <BottomHeaderLeft>友情链接</BottomHeaderLeft>
                </BottomHeader>
                <BottomBody>
                    <BottomContent>
                        <a href='http://www.chinanews.com/mil/2019/03-28/8793682.shtml' >中国第二艘航母何时服役？</a>
                    </BottomContent>
                </BottomBody>
            </BottomWrapper>
        )
    }
}

export default Topic;