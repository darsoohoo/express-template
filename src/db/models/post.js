'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};