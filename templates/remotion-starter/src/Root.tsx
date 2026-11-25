import React from 'react';
import {Composition} from 'remotion';
import {Starter} from './Scene';
import {COMPOSITION} from './timeline';

export const RemotionRoot: React.FC = () => (
  <Composition
    id={COMPOSITION.id}
    component={Starter}
    durationInFrames={COMPOSITION.durationInFrames}
    fps={COMPOSITION.fps}
    width={COMPOSITION.width}
    height={COMPOSITION.height}
  />
);
