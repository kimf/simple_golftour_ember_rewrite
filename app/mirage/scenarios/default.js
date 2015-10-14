export default function(server) {
  server.createList('tour', 10);
  server.create('tour', {'current-user-role': 'creator'});
  server.create('tour', {'current-user-role': 'admin'});
}
