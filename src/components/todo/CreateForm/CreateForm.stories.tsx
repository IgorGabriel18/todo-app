import type { Meta, StoryObj } from "@storybook/react";

import { CreateForm } from ".";

const meta: Meta<typeof CreateForm> = {
    title: "Components/CreateForm",
    component: CreateForm,
    parameters: {
        docs: {
            description: {
                component:
                    "The CreateForm component serves as a form designed for creating new tasks. It encompasses text input fields, a submission button, and features for displaying error messages."
            }
        }
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof CreateForm>;

export const Default: Story = {};

export const WithError: Story = {
    errors: {
        description: { message: "Description is required" }
    }
};
