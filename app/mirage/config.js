export default function() {

  //var attrs = JSON.parse(request.requestBody);

  this.get('/api/v1/tours', function(db, request) {
    return {
      data: db.tours.map(attrs => (
        {type: 'tours', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/api/v1/tours/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'tours',
        id: id,
        attributes: db.tours.find(id)
      }
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
