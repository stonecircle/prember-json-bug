import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  since: DS.attr('string'),
  until: DS.attr('string'),
  content: DS.attr('string'),
});
