class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = `?api_key=${apiKey}`;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async postComment(commentData) {
    try {
      await axios.post(`${this.baseUrl}comment${this.apiKey}`, commentData);
    } catch (error) {
      console.log(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(`${this.baseUrl}comment${this.apiKey}`);
      return response.data.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.log(error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates${this.apiKey}`
      );
      return response.data.sort((a, b) => a.timestamp - b.timestamp);
    } catch (error) {
      console.log(error);
    }
  }
}
