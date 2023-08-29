import type { Preview } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";

import "~styles/global-styles.scss";

import { store } from "../src/store/store";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        layout: "fullscreen"
    }
};

export const decorators = [
    (Story) => (
        <div id="root">
            <Provider store={store}>
                <Story />
            </Provider>
        </div>
    )
];

export default preview;
