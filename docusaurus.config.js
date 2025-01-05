// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
    themes as prismThemes
} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Records from Screwing Around',
    tagline: 'Notes from screwing around on the internet.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://ratogbm.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/records_from_screwing_around/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ratogbm', // Usually your GitHub org/user name.
    projectName: 'records_from_screwing_around', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                blog: {
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Records from Screwing Around',
                logo: {
                    alt: 'Site Logo',
                    src: 'img/logo.svg',
                },
                items: [{
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Notes',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                      href: 'https://ratogbm.github.io/',
                      label: 'Homepage',
                      position: 'right',
                    },
                    {
                        href: 'https://github.com/ratogbm',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [{
                        title: 'Docs',
                        items: [{
                            label: 'Notes',
                            to: '/docs/intro',
                        }, ],
                    },
                    {
                        title: 'Socials',
                        items: [{
                            label: 'Medium',
                            href: 'https://medium.com/@ratogbm',
                        }, ],
                    },
                    {
                        title: 'More',
                        items: [{
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/ratogbm',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} RatoGBM. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['bash'],
            },
        }),
};

export default config;
