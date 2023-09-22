import { withThemeByClassName } from "@storybook/addon-styling";

import "../src/app.css";
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },

    decorators: [
        withThemeByClassName({
            themes: {
                light: "light",
                dark: "dark"
            },
            defaultTheme: "light"
        })
    ]
};

export default preview;
