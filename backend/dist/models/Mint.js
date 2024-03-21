"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MintSchema = new mongoose_1.default.Schema({
    imageUri: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });
const Mint = mongoose_1.default.model('Mint', MintSchema);
exports.default = Mint;
