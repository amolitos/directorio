import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import '../../../css/player.css';

export function Player({ vkey }) {
  const playerRef = useRef();
  const source = {
    type: 'video',
    sources: [
      {
        src: vkey,
        provider: 'youtube',
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      playerRef.current.plyr.on('playing', () => {
        const poster = document.querySelector('.plyr__poster');
        poster.style.opacity = 0;
        poster.style.display = 'none';
      });
      playerRef.current.plyr.on('pause', () => {
        const poster = document.querySelector('.plyr__poster');
        poster.style.opacity = 1;
        poster.style.display = 'block';
      });
    }, 1000);
  });

  return (
    <Plyr
      ref={playerRef}
      source={source}
      options={{
        youtube: {
          noCookie: false,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        controls: {
          controls: true,
          disableContextMenu: true,
        },
      }}
    />
  );
}
