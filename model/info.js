let mongoose = require('mongoose');let Schema = mongoose.Schema;   //  创建模型let infoSchema = new Schema({	author: String,	content: String,	collectionCount: Number,	commentsCount: Number,	createdAt: String,	title: String,	originalUrl: {type:String,unique: true},	viewsCount: Number,	summaryInfo: String,	category: {		id: String,		name: String,		title: String	}});module.exports = mongoose.model('juejinInfos', infoSchema);