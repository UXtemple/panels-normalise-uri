import normalisePath from './normalise-path';
import withTrailingSlash from './with-trailing-slash';

const ORPHAN_TELEPORT = /(.*)https?:\/$/;

export default function normaliseUri(uri) {
  let finalUri = normalisePath(withTrailingSlash(uri));

  const matchOrphanTeleport = finalUri.match(ORPHAN_TELEPORT);

  if (matchOrphanTeleport) {
    finalUri = matchOrphanTeleport[1];
  }

  finalUri = finalUri.replace(/:\//g, '://');

  return finalUri;
}
