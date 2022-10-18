import { atom } from 'recoil';

const faceImageState = atom<File | null>({
  key: 'faceImageState',
  default: null,
});

export default faceImageState;
