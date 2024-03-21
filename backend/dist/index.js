"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mint_1 = __importDefault(require("./controllers/mint"));
const login_1 = __importDefault(require("./controllers/login"));
const vote_1 = __importDefault(require("./controllers/vote"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5005;
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// 모든 도메인의 요청을 허용
app.use((0, cors_1.default)({
    origin: true,
}));
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
app.use('/api/mint', mint_1.default);
app.use('/api/login', login_1.default);
app.use('/api/vote', vote_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
