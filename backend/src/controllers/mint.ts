import { Router, Request, Response } from 'express';
import Mint from '../models/Mint';

// Mint 모델을 위한 인터페이스 정의
interface IMint {
  imageUri: string;
  owner: string;
  save: () => Promise<IMint>; // save 메소드가 Promise를 반환한다고 가정
}

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  // req.body에서 타입 추론을 사용
  const { imageUri, owner } = req.body;

  // 이미 존재하는 imageUri 또는 owner가 있는지 확인
  try {
    const existingMint = await Mint.findOne({ $or: [{ imageUri }, { owner }] });
    if (existingMint) {
      return res.status(400).json({ message: '이미 존재하는 imageUri 또는 owner입니다.' });
    }

    const mint = new Mint({ imageUri, owner });
    await mint.save();
    res.status(201).json(mint);
  } catch (err) {
    res.status(500).json({ message: '서버 오류가 발생했습니다.', error: err });
  }
});

module.exports = router;
