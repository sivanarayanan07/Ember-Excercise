import Ember from 'ember';

export function subStr(string) {
  // 0 is a string from where substring would return
  //1 starting pos of substring
  //2 ending pos of substring
  return string[0].substring(string[1], string[2]);
}

export default Ember.Helper.helper(subStr);
