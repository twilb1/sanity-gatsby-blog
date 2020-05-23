export default {
    name: 'feature',
    type: 'document',
    title: 'Features',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
              {
                type: 'authorReference'
              }
            ]
        },      
        {
            name: 'excerpt',
            type: 'excerptPortableText',
            title: 'Synopsis',
            description:
              'This ends up on summary pages, on Google, when folks share your feature in social media.'
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Feature Image'
          }, 
          {
            name: 'body',
            title: 'Description',
            type: 'bodyPortableText'
          }           
    ]
}