var registery = require('./../');

registery.write({keyName: 'HKEY_CURRENT_USER\\Environment', valueName: 'MyCustomValue', value: 1050 }, function (err) {
    if (err) {
        throw new Error(err);
    }

    registery.read({keyName: 'HKEY_CURRENT_USER\\Environment', valueName: 'MyCustomValue'}, function (err, value) {
        if (err) {
            throw new Error(err);
        }

        console.log(value);
    });
});