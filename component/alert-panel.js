//======================================================
// defaults

Session.setDefault('alertMessage', false);


//======================================================
// define our webcomponent

Template.alertPanel.registerElement('alert-panel');


//======================================================
// global functionality

Template.registerHelper('getCurrentAlert', function(){
  return Session.get('alertMessage');
});



//======================================================
// alert panel

Template.alertPanel.helpers({
  displayAlert: function(){
    if(Session.get('alertMessage')){
      return true;
    }else{
      return false;
    }
  },
  getAlertMessage: function(){
    if(Session.get('alertMessage')){
      return Session.get('alertMessage');
    }
  }
});
Template.alertPanel.events({
  "click #alertPanel":function(){
    Session.set('alertMessage', false);
  }
});




//======================================================
// this is only for diagnostics and testing

Template.toggleAlert.events({
  "click #toggleAlertLink": function(event, template){
    if(Session.get('alertMessage')){
      Session.set('alertMessage', false);
    }else{
      Session.set('alertMessage', 'Toggle!');
    }
  }
});


//======================================================
// API Object

AlertPanel = {
  announce: function(message){
    Session.set('alertMessage', message);
  },
  close: function(){
    Session.set('alertMessage', false);
  }
}
