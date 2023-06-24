import { atom } from "recoil";

const startRidingFloatLinkAtom = atom({
    key: 'startRidingFloatLinkAtom',
    default: {
        start: false,
        end: false
    }
});


export default startRidingFloatLinkAtom;