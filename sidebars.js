/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  introSidebar: [
    {
      type: 'category',
      label: 'Quick Start Guides',
      items: [
        {
          type: 'doc',
          id: 'start/zzhp',
        },
        {
          type: 'doc',
          id: 'start/zzh',
        },
      ],
    },

    {
      type: 'doc',
      id: 'drivers'
    },

    {
      type: 'doc',
      id: 'firmware'
    },

    {
      type: 'doc',
      id: 'bsl',
    },

    {
      type: 'doc',
      id: 'flash/intro'
    },

    {
      type: 'category',
      label: 'Software Configuration',
      items: [
        {
          type: 'doc',
          id: 'software-config/zigbee2mqtt',
        },
        {
          type: 'doc',
          id: 'software-config/zha-home-assistant',
        },
        {
          type: 'doc',
          id: 'software-config/zigbee-for-domoticz',
        },
      ],
    },

    {
      type: 'category',
      label: 'Guides and Articles',
      items: [
        {
          type: 'doc',
          id: 'guides/rpi-setup',
        },
        {
          type: 'doc',
          id: 'guides/emc-rf-best-practices',
        },
        {
          type: 'doc',
          id: 'guides/recover-locked-bsl',
        },
        {
          type: 'doc',
          id: 'guides/ti-part-numbers',
        },
      ],
    },

    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        {
          type: 'doc',
          id: 'advanced/flash-jtag',
        },
        {
          type: 'doc',
          id: 'advanced/bsl-explained',
        },
        {
          type: 'doc',
          id: 'advanced/pinouts',
        },
      ],
    },

    /*
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
    */

  ],

};

module.exports = sidebars;
