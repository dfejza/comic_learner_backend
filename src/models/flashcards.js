'use strict'

module.exports = (sequelize, DataTypes) => {  
  const FlashCard = sequelize.define('flashcard', {
    user_id: {
      type: DataTypes.STRING,
      required: true
    },
    front: {
      type: DataTypes.TEXT, //change to blob
      required: true
    },
    back: {
      type: DataTypes.TEXT,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    interval_modifier: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_lapses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numm_reviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return FlashCard;
};



/*
CREATE TABLE flashcards (
	user_id VARCHAR(50) NOT NULL,
	front TEXT NOT NULL,
	back TEXT NOT NULL,
	created_at DATETIME NOT NULL,
	interval_modifier SMALLINT NOT NULL,
	num_lapses SMALLINT NOT NULL,
	numm_reviews SMALLINT NOT NULL,
	due_date date NOT NULL,
	updated_at date,
	deleted_at date,
	PRIMARY KEY (user_id, created_at)
);
*/
