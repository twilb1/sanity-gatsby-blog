export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebc09a9873ac0c64bd066b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-syxu5fog',
                  apiId: 'cbd7e679-fdf2-412a-8a78-7d8db1918815'
                },
                {
                  buildHookId: '5ebc09a9bbbe3197acb362b6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-15q7k7xi',
                  apiId: 'd3a9bd91-7057-48b8-981d-68c16c932020'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/twilb1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-15q7k7xi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
