export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ff894f16d5c4a097c83c354',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-wyk3ir1h',
                  apiId: '6a9ed7f3-b776-4201-b1d7-1acf6a77a3ee'
                },
                {
                  buildHookId: '5ff894f1eb32770d722518b0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jte418eq',
                  apiId: '3735d69a-1b6b-4882-b655-37e505f002a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/segdeha/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jte418eq.netlify.app', category: 'apps'}
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
