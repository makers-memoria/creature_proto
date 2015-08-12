angular.module('starter.services', [])

.factory('Images', function() {
  // Might use a resource here that returns a JSON array

  // var creatures = [
  //   {
  //     id: 0,
  //     name: 'Reading',
  //     gif: '/img/pet_rock__x3_readLeft_x1_readPageTurn_quality10_loop_1355433935.gif'
  //   },
  //   {
  //     id: 1,
  //     name: 'ReadBreak',
  //     gif: '/img/pet_rock__x2_readLeft_x1_readBreak_x1_readBreakTalk_x1_readResume_quality10_loop_1355434031.gif'
  //   },
  //   {
  //     id: 2,
  //     name: 'SpeedRead',
  //     gif: '/img/pet_rock__x1_speedRead_quality10_loop_1355433966.gif'
  //   }
  // ]


  // Some fake testing data
  var food = [];

  return {
    // pet: function() {
    //   return creatures;
    // },
    foodList: function() {
      return food;
    },
    addFood: function(foodItem) {
      food.push(foodItem)
    }
  };
})

.factory('populateFood', function(){
  var food = [{
    id: 0,
    name: 'Sandwich',
    location: './img/sammich.png'
  }, {
    id: 1,
    name: 'Rice',
    location: './img/fried_rice__x1_iconic_png_1354829839.png'
  }, {
    id: 2,
    name: 'Taco',
    location: './img/cold_taco.png'
  }
    ];

    return {
      randomFood: function() {
        return food[Math.floor(Math.random() * food.length)]
      }
    }
})

.factory('QuestionFactory', ['$firebaseArray', function($firebaseArray) {
  var itemRef =  new Firebase('https://studymemoria.firebaseio.com/MyStudies');
  return $firebaseArray(itemRef);
}])

.factory('listFactory', ['$firebaseArray', function($firebaseArray) {
  var itemRef =  new Firebase('https://studymemoria.firebaseio.com/MyStudies');
  var list = $firebaseArray(itemRef);
  return {
    myList: function() {
      return list;
    }
  };

}]);




// .factory('QuestionFactory', function($firebaseObject) {
//   return $firebaseObject.$extend({
//     $$updated: function(snap){
//       var changed = $firebaseObject.prototype.$$updated.apply(this, arguments);
//             // manipulate the date
//             if( changed ) {
//                this.date = new Date(this.date||0);
//             }
//             // inform the sync manager that it changed
//             return changed;
//     },
//     toJSON: function() {
//             return angular.extend({}, this, {
//                 // revert Date objects to json data
//                 date: this.date? this.date.getTime() : null
//             });
//         }
//     });
// });
