const app = new Vue({
      el: '#app',

      data: {
      
        apiUrl: 'http://api.giphy.com/v1/gifs',
        apiKey: '80bfcbf357864cd18518c324f47a7098',
        trendingGifs: null,
        searchedGifs: null,
        query: ''
      },

      methods: {
        fetchGifs: function() {
          const url = `${this.apiUrl}/trending?api_key=${this.apiKey}`;

          fetch(url)
            .then(response => response.json())
            .then(data => this.trendingGifs = data.data);
        },
        searchGifs: function() {
            const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${this.query}&limit=8`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => this.searchedGifs = data.data);
        }
      },

      created: function() {
        this.fetchGifs();
      }
    });