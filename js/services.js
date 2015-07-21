angular.module('starter.services', [])

.factory('Map', function() {

  var w = window.innerWidth;
  var h = window.innerHeight;
  if (h > 93) {
      h = h - 93;
  }

  var z = 18;
  var s = 1;
  
  // if (w > 640 || h > 640) {
  //     if (w % 2 == 0) {
  //         w = w/2;
  //     }
  //     else {
  //         w = (w-1)/2;
  //     }
  //     if (h % 2 == 0) {
  //         h = h/2;
  //     }
  //     else {
  //         h = (h-1)/2;
  //     }
  //     z = 18;
  //     s = 2;
  // }

  var url = 'https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=33.654320,-117.811969&markers=color:green|33.654320,-117.811969&zoom=' + z + ' &scale=' + s + '&size=' + w + 'x' + h;

  return {
    getUrl: function() {
      return url;
    },
    get: function() {
      return null;
    }
  }
})

.factory('Personnel', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var personnel = [{
    id: 0,
    name: 'Ben Sparrow',
    status: 2,
    personStatus: 'In Need of Assistance',
    evacZone: 'Evac Zone B (100 ft)',
    phoneNo: '213-555-6789',
    workLocation: 'Warehouse',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    status: 2,
    personStatus: 'In Need of Assistance',
    evacZone: 'Evac Zone B (85 ft)',
    phoneNo: '213-555-6789',
    workLocation: 'Warehouse',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    status: 0,
    personStatus: 'Not Checked In',
    evacZone: 'Evac Zone B (20 ft)',
    phoneNo: '213-555-6789',
    workLocation: 'Warehouse',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    status: 0,
    personStatus: 'Not Checked In',
    evacZone: 'Evac Zone B (35 ft)',
    phoneNo: '213-555-6789',
    workLocation: 'Warehouse',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    status: 1,
    personStatus: 'Checked In',
    evacZone: 'Evac Zone B',
    phoneNo: '213-555-6789',
    workLocation: 'Warehouse',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return personnel;
    },
    needAssistance: function() {
      var needAssistancePersonnel = [];
      for (i = 0; i < personnel.length; i++) {
        if (personnel[i].status === 2) {
          needAssistancePersonnel.push(personnel[i]);
        }
      }
      return needAssistancePersonnel;
    },
    notCheckedIn: function() {
      var notCheckedInPersonnel = [];
      for (i = 0; i < personnel.length; i++) {
        if (personnel[i].status === 0) {
          notCheckedInPersonnel.push(personnel[i]);
        }
      }
      return notCheckedInPersonnel;
    },
    checkedIn: function() {
      var checkedInPersonnel = [];
      for (i = 0; i < personnel.length; i++) {
        if (personnel[i].status === 1) {
          checkedInPersonnel.push(personnel[i]);
        }
      }
      return checkedInPersonnel;
    },
    get: function(personId) {
      for (var i = 0; i < personnel.length; i++) {
        if (personnel[i].id === parseInt(personId)) {
          return personnel[i];
        }
      }
      return null;
    }
  };
});
