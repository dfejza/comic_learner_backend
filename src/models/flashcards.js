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
    manga: {
      type: DataTypes.STRING,
      required: true
    },
    volume: {
      type: DataTypes.STRING,
      required: true
    },
    page: {
      type: DataTypes.STRING,
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
	manga VARCHAR(50) NOT NULL,
	volume VARCHAR(50) NOT NULL,
	page VARCHAR(50) NOT NULL,
	created_at timestamp NOT NULL,
	interval_modifier SMALLINT NOT NULL,
	num_lapses SMALLINT NOT NULL,
	numm_reviews SMALLINT NOT NULL,
	due_date date NOT NULL,
	updated_at timestamp,
	deleted_at timestamp,
	PRIMARY KEY (user_id, created_at)
);
*/
