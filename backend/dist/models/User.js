"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
}, 
// 생성일(createdAt)과 수정일(updatedAt)을 자동으로 관리
{ timestamps: true });
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
