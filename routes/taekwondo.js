var router = require('express').Router();

var archer = ['Jackie Galloway', 'Stephen Lambdin', 'Steven Lopez', 'Paige McPherson'];

var archerOrigin = ['Wylie, Texas', 'Rockwall, Texas', 'Sugar Land, Texas', 'Abilene, Texas'];

// router.get('/', function(request, response){
//   response.send('Please use /archer and /archerOrigin, thanks!');
// });

router.get('/', function(request, response){
  var random = Math.floor(Math.random()*archer.length);
  var olympian = {
    name: archer[random],
    origin: archerOrigin[random]
  };
  console.log(olympian);
  response.send(olympian);
});

// router.get('/archerOrigin', function(request, response){
//   response.send(archerOrigin);
// });

// router.get('/both', function(request, response){
//   var total = archer.concat(archerOrigin);
//   response.send(total);
// });



  // if(data.type === 'archer'){
  //   data.push(archer.archerName);
  //   response.sendStatus(200);
  // } else if(data.type === 'archerOrigin') {
  //   data.push(archerOrigin.archerOriginName);
  //   response.sendStatus(200);
  // } else {
  //   response.sendStatus(500);
  // }



module.exports = router;
