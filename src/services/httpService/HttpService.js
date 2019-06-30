class HttpService {
  get(url) {
    return fetch(url).then(response => response.json());
  }
}

export const httpService = new HttpService();
