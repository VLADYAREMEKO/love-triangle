/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) 
{
  var a = preferences.slice();
  for(var i = 0; i < a.length; i++) a[i]--;
  var ans = 0;

  for(var i = 0; i < a.length; i++)
  {
      var FirstLove = a[i];
      var SecondLove = a[FirstLove];
      var ThirdLove = a[SecondLove];
      
      if(ThirdLove == i && FirstLove != SecondLove && SecondLove != ThirdLove) 
         {
        ans++;
         }
  }
  return ans / 3;
};

