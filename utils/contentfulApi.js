import { Config } from './config';

const defaultOptions = {
  preview: false,
};

export default class ContentfulApi {

  // Call the Contentful GraphQL API using fetch.
  static async callContentful(query, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = options.preview ?
      process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN :
      process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error('Could not fetch data from Contentful!');
    }
  }

  /* Front page slider */
  static async getTop() {
    const query = `{
    heroImageCollection {
      items{
        title
        galleryCollection {
          items{
               title
               url
                }
           }
      }
    }
  }`;

    const response = await this.callContentful(query);
    const heroImageData = response.data.heroImageCollection.items ?
      response.data.heroImageCollection.items :
      [];
    return heroImageData;
  }

  /* Profile page */
  static async getProfile() {
    const query = `{
          profileCollection {
            items{
              image{
                   url
                  }
              text {
                json
              }
            }
          }
        }`;

    const response = await this.callContentful(query);
    const profileData = response.data.profileCollection.items ?
      response.data.profileCollection.items :
      [];
    return profileData;
  }

  /*  Works page */
  // works post list for works list page
  static async getWorksPaginatedPostSummaries(page) {
    const skipMultiplier2 = page === 1 ? 0 : page - 1;
    const skip2 =
      skipMultiplier2 > 0 ? Config.paginationWorks.pageSize * skipMultiplier2 : 0;
    const query = `{
      worksCollection (limit: ${Config.paginationWorks.pageSize} , skip: ${skip2} ,order: date_DESC) {
      total
       items{
        sys {
          id
        }
        date
          title
          slug
          image {
            url
            title
          }
        galleryCollection {
           items{
           title
           url
        }
        }
      }
      }
    }`;

    const response = await this.callContentful(query);

    const paginatedWorksSummaries = response.data.worksCollection ?
      response.data.worksCollection :
      { total: 0, items: [] };

    return paginatedWorksSummaries;
  }

  // works all post slugs
  static async getWorksAllPostSlugs() {
    let page = 1;
    let shouldQueryMoreSlugs = true;
    const returnSlugs = [];

    while (shouldQueryMoreSlugs) {
      const response = await this.getWorksPaginatedSlugs(page);

      if (response.slugs.length > 0) {
        returnSlugs.push(...response.slugs);
      }

      shouldQueryMoreSlugs = returnSlugs.length < response.total;
      page++;
    }
    return returnSlugs;
  }

  static async getWorksPaginatedSlugs() {

    const query = `{
      worksCollection {  
        total 
          items {
            slug
            }
          }
        }`;

    const response = await this.callContentful(query);

    const { total } = response.data.worksCollection;
    const slugs = response.data.worksCollection.items ?
      response.data.worksCollection.items.map((item) => item.slug) :
      [];

    return { slugs, total };
  }

  // works post for works single page
  static async getWorksPostBySlug(slug, options = defaultOptions) {
    const query = `{
      worksCollection (limit: 1, where: {slug: "${slug}"}, preview: ${options.preview}){
        total
         items{
          title
          slug
          image {
            url
          }
          text
          location
          use
          buildingArea
          architecturalArea
          constitution
          constructionwork
           galleryCollection {
           items{
                title
                url
                width
                height
                 }
            }
      }
      }
    }`;

    const response = await this.callContentful(query, options);
    const post = response.data.worksCollection.items ?
      response.data.worksCollection.items :
      [];
    return post.pop();
  }

  // total post for pagenation
  static async getWorksTotalPostsNumber() {
    const query = `
      {
        worksCollection {
          total
        }
      }
    `;
    const response = await this.callContentful(query);
    const totalPosts = response.data.worksCollection.total ?
      response.data.worksCollection.total : 0;
    return totalPosts;
  }

  // works title for pagination to next post in single page
  static async getWorksTitle() {
    const query = `{
        worksCollection(order: date_DESC){             
               items{
                 date
                title
                slug                
            }
          }
          }`;

    const response = await this.callContentful(query);
    const worksTitleData = response.data.worksCollection.items ?
      response.data.worksCollection.items : [];
    return worksTitleData;
  }


  /*  News page */
  // news post list for news list page
  static async getPaginatedPostSummaries(page) {

    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip =
      skipMultiplier > 0 ? Config.paginationNews.pageSize * skipMultiplier : 0;

    const query = `{
        blogPostCollection(limit: ${Config.paginationNews.pageSize}, skip: ${skip}, order: date_DESC) {
          total
          items {
            sys {
              id
            }
            date
            title
            slug
            body {
              json
              links {
                entries {
                  inline {
                    sys {
                      id
                    }
                    __typename
                    ... on BlogPost {
                      title
                      slug
                    }
                  }
                  
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                  }
                }
              }
            }
          }
        }
      }`;

    const response = await this.callContentful(query);

    const paginatedPostSummaries = response.data.blogPostCollection ?
      response.data.blogPostCollection :
      { total: 0, items: [] };

    return paginatedPostSummaries;
  }


  // pagenation
  static async getTotalPostsNumber() {
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;
    const response = await this.callContentful(query);
    const totalPosts = response.data.blogPostCollection.total ?
      response.data.blogPostCollection.total :
      0;
    return totalPosts;
  }
}
