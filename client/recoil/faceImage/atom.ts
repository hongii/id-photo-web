import { atom } from 'recoil';

const faceImageState = atom<File | Blob | null>({
  key: 'faceImageState',
  default: null,
});

export default faceImageState;
