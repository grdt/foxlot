var importer = require('../../import/index'),
    DataImporter;

DataImporter = {
    type: 'data',
    preProcess: function (importData) {
        importData.preProcessedByData = true;
        return importData;
    },
    doImport: function (importData) {
        return importer.doImport(importData);
    }
};

module.exports = DataImporter;
