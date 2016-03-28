/**
 * Created by holly on 15/02/16.
 */

Template.manageTeamMembers.onCreated(function(){
    Meteor.subscribe('teamMembers');
});

Template.manageTeamMembers.helpers({
    team: function() {
        return TeamMembers.find({});
    },

    rostas: function() {
        return Rostas.find({});
    },

    doRostasExist: function() {
        return Rostas.find({}).count() > 0;
    }//,

    // teamMemberCount: function(){
    //     return {count: Counts.get('teamMemberCount'), teamMember: teamMember};
    // }

});

Template.manageTeamMembers.events({
    "change #teams": function(event, template){
        var selectedTeam = $('#teams').val;
        console.log(template.$('#teams').val());
        Session.set("selected-team", selectedTeam);
    },

    'submit #add-team-member' (event, template){
        event.preventDefault();

        if('select' !== template.$('#teams').val()){
            let newTeamMember = {
                firstName: template.find('[name=firstName]').value,
                lastName: template.find('[name=lastName]').value,
                rostaId: template.$('#teams').val()
            }

            let index = TeamMembers.find().count() + 1;
            newTeamMember.order = index;
            newTeamMember.id = index;

            Meteor.call('addTeamMember', newTeamMember, (error) => {
                if(error){
                    console.log(error.reason);
                    alert(error);
                }
                else {
                    $(event.target).get(0).reset();
                    $('[name=firstName]').focus();
                }
            });
        }
        else {
            alert("Choose a valid Team from the dropdown");
        }

    }
});


