const { formatArrayStrings } = require('./arrayManipulation.js');
function createUserProfiles() {
    let names = formatArrayStrings();
    let userProfile = [];

    names.forEach((name, i) => {
        let originalName = name;
        let modifiedName = name;
        let id = i + 1;

        userProfile.push({
            'originalName': originalName, 'modifiedName': modifiedName, 'id': id
        });
    });

    return userProfile;
}
console.log('The user profiles are ' + JSON.stringify(createUserProfiles()));
