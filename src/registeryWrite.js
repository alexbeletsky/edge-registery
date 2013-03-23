var edge = require('edge');

module.exports = edge.func(function () {/*
        using System;
        using System.Collections.Generic;
        using System.Threading.Tasks;
        using Microsoft.Win32;

        public class Startup
        {
            public async Task<object> Invoke(IDictionary<string, object> input)
            {
                var keyName = (string)input["keyName"];
                var valueName = (string)input["valueName"];
                var value = input["value"];

                Registry.SetValue(keyName, valueName, value);

                return null;
            }
        }
    */}
);