import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from ".";

const meta: Meta<typeof Footer> = {
    title: "Components/Footer",
    component: Footer,
    parameters: {
        docs: {
            description: {
                component:
                    "The Footer component serves as the page's footer, crafting a section that encompasses pertinent information and links associated with the developer."
            }
        }
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
