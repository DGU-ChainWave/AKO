import { Router, Request, Response } from 'express';
import User from '../models/User';

// User 모델을 위한 인터페이스 정의
interface IUser {
  walletAddress: string;
  save: () => Promise<IUser>; // save 메소드가 Promise를 반환한다고 가정
}

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  // req.body에서 타입 추론을 사용
  const { walletAddress } = req.body;

  // 이미 존재하는 walletAddress가 있는지 확인
  try {
    const existingUser = await User.findOne({ walletAddress });
    if (existingUser) {
      return res.status(400).json({ message: '이미 존재하는 walletAddress입니다.' });
    }

    const user = new User({ walletAddress });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: '서버 오류가 발생했습니다.', error: err });
  }
});

module.exports = router;
