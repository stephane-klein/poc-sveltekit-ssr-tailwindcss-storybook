/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: {
                    implementation: require.resolve('postcss'),
                }
            }
        }
    ],
    framework: {
        name: "@storybook/sveltekit",
        options: {}
    },
    docs: {
        autodocs: "tag"
    }
};
export default config;
