export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e1b3abf87a3d9715ea30170',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-i925nzvd',
                  apiId: 'de24344d-bc66-47b6-a41e-bca8b7c6e39a'
                },
                {
                  buildHookId: '5e1b3abfcf04865cbfb50ac0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-27v1r49o',
                  apiId: 'c4430470-aee3-4f97-8c9c-924cb1e48c54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suenot/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-27v1r49o.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
