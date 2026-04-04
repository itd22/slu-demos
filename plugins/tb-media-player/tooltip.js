return mediaSession
  ? mediaSession.thumbnail
    ? Image({ path: mediaSession.thumbnail, size: 200 })
    : null
  : "No media playing";
