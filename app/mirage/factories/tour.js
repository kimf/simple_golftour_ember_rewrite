import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Tour ${i}`; },
  'current-user-role': 'member'
});
// creator/admin/member
