import mongoose from 'mongoose';

const MintSchema = new mongoose.Schema(
  {
    imageUri: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

const Mint = mongoose.model('Mint', MintSchema);

export default Mint;
