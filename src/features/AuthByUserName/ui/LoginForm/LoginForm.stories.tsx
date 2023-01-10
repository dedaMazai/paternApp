import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import LoginForm from './LoginForm';

import '@/app/styles/index.scss';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ReduxDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ReduxDecorator({
    loginForm: { username: 'admin', password: '123', inviteCode: 'ERROR' },
})];
