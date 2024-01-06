import { Schema, model, SchemaTypes } from "mongoose";

const MsgSchema = new Schema({
  message: {
    type: String,
    required: [true, "Message Cant be empty"],
  },

  recivedId: {
    type: SchemaTypes.ObjectId,
    required: [true, "Message not sent due to received bad receipts"],
  },
}, { timestamps: true });

const MessageModel = model('message', MsgSchema);

export default MessageModel;
