
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('toon').del(),

    // Inserts seed entries
    knex('toon').insert({name: 'Animaniacs', year: 1992, network: "Warner Brothers", image: "http://vignette4.wikia.nocookie.net/animaniacs/images/c/c9/Animaniacs.JPG/revision/latest?cb=20140603004922" }),
    knex('toon').insert({name: 'Bugs Bunny', year: 1949, network: "Warner Brothers", image: "http://static.dnaindia.com/sites/default/files/2015/07/27/359539-clip-art-bugs-bunny-397350.jpg"}),
    knex('toon').insert({name: 'Doug', year: 1995, network: "Nickelodean", image: "http://watchcartoononline.com/thumbs/Doug-Season-3-Episode-10-Doug-Inc--Doug-s-Nightmare-on-Jumbo-St-.jpg" })
  );
};
