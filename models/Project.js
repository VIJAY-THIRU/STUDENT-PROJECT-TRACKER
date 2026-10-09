const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  projectTitle: String,
  techStack: String,
  team: [String],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = mongoose.model('Project', projectSchema);