'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here

    // Post.belongsTo(models.User, {
    //   foreingKey: 'userId',
    //   onDelete: 'CASCADE'
    // })
  };
  return Post;
};