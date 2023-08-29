import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
    parameters: {
        docs: {
            description: {
                component: "The Header component serves as the page header, containing only a title."
            }
        }
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
