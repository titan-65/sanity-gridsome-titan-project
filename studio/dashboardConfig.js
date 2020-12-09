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
                  buildHookId: '5fd03e2b21b38b41c9da7089',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-titan-project-studio',
                  apiId: 'a1f8acfd-193c-404d-b749-bbb808bbefd0'
                },
                {
                  buildHookId: '5fd03e2b4d85ff3d1f6c6e29',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-titan-project',
                  apiId: '50fd4833-3db3-4218-9668-b54a9fe7a7d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/titan-65/sanity-gridsome-titan-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-titan-project.netlify.app', category: 'apps'}
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
