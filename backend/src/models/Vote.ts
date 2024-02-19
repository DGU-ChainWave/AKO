import mongoose from 'mongoose';

const VoteSchema = new mongoose.Schema(
  {
    imageUri: {
      type: String,
      required: true,
      unique: true,
    },
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // 투표한 사람 배열
      default: [] as string[],
    },
  },
  { timestamps: true },
);

const Vote = mongoose.model('Vote', VoteSchema);

export default Vote;
