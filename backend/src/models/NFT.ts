import mongoose from 'mongoose';

const NFTSchema = new mongoose.Schema(
  {
    imageUri: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const NFT = mongoose.model('NFT', NFTSchema);

export default NFT;
