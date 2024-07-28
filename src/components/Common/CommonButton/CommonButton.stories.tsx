// src/components/Common/CommonButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CommonButton from '.';

const meta: Meta<typeof CommonButton> = {
    title: 'Components/CommonButton',
    component: CommonButton,
    argTypes: {
        children: { control: 'text' },
        variant: {
            control: { type: 'select', options: ['default', 'outline', 'red', 'green', 'yellow', 'purple'] }
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] }
        },
        onClick: { action: 'clicked' }
    },
} as Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const Default: Story = {
    args: {
        children: 'Default Button',
        variant: 'default',
        size: 'md',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        variant: 'outline',
        size: 'md',
    },
};

export const Red: Story = {
    args: {
        children: 'Red Button',
        variant: 'red',
        size: 'md',
    },
};
