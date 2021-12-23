var numSpecialEquivGroups = function(words)
{
  const groups = [];
  for (const word of words)
  {
    const evenChars = word.split('').filter((_, i) => i % 2 === 0).sort().join('');
    const oddChars = word.split('').filter((_, i) => i % 2 === 1).sort().join('');
    let found = false;
    for (const[groupEven, groupOdd] of groups)
    {
      if (groupEven === evenChars &&groupOdd === oddChars)
      {
        found = true;
        break;
      }
    }
    if (!found)
      groups.push([ evenChars, oddChars ]);
  }
  return groups.length;
};