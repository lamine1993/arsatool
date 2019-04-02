import Unsplash, { toJson }  from 'unsplash-js/native';

// require syntax
//const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "01b4ecd99eb13753d3d813d14ec3b4f07b986b58a3fb0481b93c269a336ea2a5",
  secret: "f7341ac53748884334bd1f6a043317059e27bb963a3382a805fa88aa29c8580e"
});

export function getAttaquesCulture(culture){
 
    unsplash.search.collections(culture, 1)
     .then(toJson)
     .then(json => {
        
     });
}