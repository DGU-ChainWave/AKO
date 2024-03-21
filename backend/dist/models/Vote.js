"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VoteSchema = new mongoose_1.default.Schema({
    imageUri: {
        type: String,
        required: true,
        unique: true,
    },
    voter: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        // 투표한 사람 배열
        default: [],
    },
}, { timestamps: true });
const Vote = mongoose_1.default.model('Vote', VoteSchema);
exports.default = Vote;
