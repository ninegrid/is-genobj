module.exports = function(o){
  var smellsLike =
    typeof(o) === 'object' && (/^\[object Generator\]/).test(o.toString());
  var looksLike = ('next' in o);
  return smellsLike && looksLike;
};
