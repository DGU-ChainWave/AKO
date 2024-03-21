"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Vote_1 = __importDefault(require("../models/Vote"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // req.body에서 타입 추론을 사용
    const { imageUri, voter } = req.body;
    // 이미 존재하는 imageUri나 voter가 있는지 확인
    try {
        const existingVote = yield Vote_1.default.findOne({ $or: [{ imageUri }, { voter }] });
        if (existingVote) {
            return res.status(400).json({ message: '이미 존재하는 imageUri나 voter입니다.' });
        }
        const vote = new Vote_1.default({ imageUri, voter });
        yield vote.save();
        res.status(201).json(vote);
    }
    catch (err) {
        res.status(500).json({ message: '서버 오류가 발생했습니다.', error: err });
    }
}));
const voteRouter = router;
exports.default = voteRouter;
