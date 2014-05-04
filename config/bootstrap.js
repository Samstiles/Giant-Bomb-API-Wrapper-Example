module.exports.bootstrap = function (cb) {
  DatabaseRetriever.start();
  cb();
};