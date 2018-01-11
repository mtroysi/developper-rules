import React from 'react';
import LikeBtn from '../LikeBtn';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

describe('simulate suite', function () {
    it('clicks', function () {
        const likeBtnElement = <LikeBtn type="up" counter={0}/>;
        let component = TestUtils.renderIntoDocument(likeBtnElement);
        let element = TestUtils.findRenderedDOMComponentWithClass(component, 'btn');

        expect(component.state.counter).toEqual(0);

        TestUtils.Simulate.click(ReactDOM.findDOMNode(element));

        expect(component.state.counter).toEqual(1);
    });
});

