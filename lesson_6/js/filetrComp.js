Vue.component('filtercomp', {
    template: `
          <form action="#" class="search-form" @submit.prevent="$parent.filter">
              <input type="text" class="search-field" v-model="$parent.userSearch">
                   <button type="submit" class="btn-search">
                      <i class="fas fa-search"></i> </button>
        </form>`
});

Vue.component('errcon', {
    props: ['error'],
    template: `
        <div class="fetch_error"">
            <h1 class="fetch_error_header" v-if="$parent.error">Server connection error</h1>
            <h1 class="fetch_error_header1" v-else="$parent.error">Connection successful</h1>
        </div>
        `
});