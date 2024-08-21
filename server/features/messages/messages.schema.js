import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    user: String,
    content: String,
    logo: String,
    timestamp: { type: Date, default: Date.now },
  });

export const Message = mongoose.model('Message', messageSchema);
