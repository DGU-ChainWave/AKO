import { Router, Request, Response } from 'express';
import Vote from '../models/Vote';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  // req.body에서 타입 추론을 사용
  const { imageUri, voter } = req.body;

  // 이미 존재하는 imageUri나 voter가 있는지 확인
  try {
    const existingVote = await Vote.findOne({ $or: [{ imageUri }, { voter }] });
    if (existingVote) {
      return res.status(400).json({ message: '이미 존재하는 imageUri나 voter입니다.' });
    }

    const vote = new Vote({ imageUri, voter });
    await vote.save();
    res.status(201).json(vote);
  } catch (err) {
    res.status(500).json({ message: '서버 오류가 발생했습니다.', error: err });
  }
});

const voteRouter = router;

export default voteRouter;
