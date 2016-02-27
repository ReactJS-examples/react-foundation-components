import keyMirrorArray from '../../util/key-mirror-array';
import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../../util/constants';

const styles =
  ['hide', 'invisible', 'show-for-sr', 'show-on-focus']
    .concat(LARGER_SCREEN_SIZES.map((size) => `show-for-${size}`))
    .concat(SCREEN_SIZES.map((size) => `show-for-${size}-only`))
    .concat(LARGER_SCREEN_SIZES.map((size) => `hide-for-${size}`))
    .concat(SCREEN_SIZES.map((size) => `hide-for-${size}-only`))
    .concat(SCREEN_ORIENTATIONS.map((orientation) => `show-for-${orientation}`))
    .concat(SCREEN_ORIENTATIONS.map((orientation) => `hide-for-${orientation}`));

export default keyMirrorArray(styles);