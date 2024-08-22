const baseURL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = "9d75a8c80d6a43fc87212c59cc267260";

const getData = async (method: string, querySting: any) => {
  const config = {
    method: method,
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  };
  try {
    const response = await fetch(`${baseURL}${querySting}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { 'Articles': data?.articles, 'Sources': data?.sources, 'Total Results:': data.totalResults };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { 'Articles': [], 'Total Results': 0 };
  }
}

describe('Get Tests ', () => {

  it('it should return the author, title and description in the get API', async () => {

    try {
      const data = await getData('GET', '?country=us&piKey=${API_KEY}');
      data.Articles.forEach(article => {

        expect(article.author).toBeDefined();
        expect(article.title).toBeDefined();
        expect(article.description).toBeDefined();

      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  });


  it('it should return the sources', async () => {

    try {
      const data = await getData('GET', '/sources?category=sports&?country=us&piKey=${API_KEY}');

      data.Sources.forEach(article => {
        
        expect(article.source).toBeDefined();
        expect(article.category).toBeDefined();
      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  });


  it('it should return the articles from specific categories', async () => {

    try {
      const data = await getData('GET', '/sources?category=sports&piKey=${API_KEY}');

      data?.Sources.forEach(article => {

        expect(article.category).toEqual('sports');

      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  });

  it('it should return the articles from specific country', async () => {

    try {
      const data = await getData('GET', '/sources?country=us&piKey=${API_KEY}');
      
      data?.Sources.forEach(article => {
        expect(article.country).toEqual('us');

      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  });

  it.only('it should get the articles from search and given date', async () => {

    try {
      const data = await getData('GET', '?q=Apple&from=2024-08-22&sortBy=popularity&piKey=${API_KEY}');
      data?.Articles.forEach(article => {
        expect(article.source).toBeDefined();

      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  });

});



