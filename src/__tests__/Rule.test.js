import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rule from '../Rule';

describe('test suite', function () {
    it('should render component', function () {
        const rule = {
            id: 1,
            title: 'If you don\'t have a mobile website, you don\'t have a website.',
            description: 'In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.',
            likes: 0,
            dislikes: 0,
            tags: ['ui']
        };

        const ruleElement = <Rule rule={rule}/>;

        expect(TestUtils.isElement(ruleElement)).toBe(true);
        expect(TestUtils.isElementOfType(ruleElement, Rule)).toBe(true);

        let component = TestUtils.renderIntoDocument(ruleElement);
        expect(component.props.rule.title).toEqual('If you don\'t have a mobile website, you don\'t have a website.');
        expect(component.props.rule.description).toEqual('In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.');
    });

    it('shallow rendering', function () {
        const rule = {
            id: 1,
            title: 'If you don\'t have a mobile website, you don\'t have a website.',
            description: 'In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.',
            likes: 0,
            dislikes: 0,
            tags: ['ui']
        };

        const ruleElement = <Rule rule={rule}/>;

        const renderer = new ShallowRenderer();
        renderer.render(ruleElement);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.className).toBe('panel panel-primary');

        expect(result.props.children[0].type).toBe('div');
        expect(result.props.children[0].props.className).toBe('panel-heading');
    });
});