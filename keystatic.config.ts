import { config, fields, collection } from '@keystatic/core';


export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    cards: collection({
      label: 'Cards',
      slugField: 'title',
      path: 'src/content/cards/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
        image: fields.image({
          label: 'Image',
          directory: 'src/assets/cards',
          publicPath: '/src/assets/cards/',
        }),
        price: fields.number({ label: 'Price' }),
      },
    }),
  },
});