import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT, SPRING} from './style';
import {COPY} from './copy';
import {SHOTS, WIPES} from './timeline';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const ShotOne: React.FC = () => {
  const frame = useCurrentFrame();
  const titleY = interpolate(frame, [8, 36], [36, 0], clamp);
  const titleOpacity = interpolate(frame, [8, 30], [0, 1], clamp);
  const dots = Array.from({length: 28}, (_, i) => {
    const angle = (i / 28) * Math.PI * 2 + (i % 2 ? 0.07 : 0);
    const start = 470 + (i % 5) * 36;
    const end = 104 + (i % 4) * 24;
    const r = interpolate(frame, [0, 58], [start, end], clamp);
    const x = 960 + Math.cos(angle) * r;
    const y = 540 + Math.sin(angle) * r * 0.72;
    const size = 9 + (i % 3) * 4;
    const fill =
      i % 6 === 0 ? COLORS.yellow : i % 3 === 0 ? COLORS.deep : COLORS.green;
    const opacity = interpolate(frame, [0, 10, 82, 112], [0, 0.8, 0.8, 0], clamp);
    return <circle key={i} cx={x} cy={y} r={size} fill={fill} opacity={opacity} />;
  });

  return (
    <AbsoluteFill style={{background: COLORS.cream, fontFamily: FONT}}>
      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 240,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: COLORS.pale,
          opacity: 0.55,
        }}
      />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080">
        {dots}
      </svg>
      <div
        style={{
          position: 'absolute',
          left: 180,
          top: 150,
          opacity: titleOpacity,
          transform: 'translateY(' + titleY + 'px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '10px 20px',
            borderRadius: 40,
            background: COLORS.pale,
            color: COLORS.deep,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            marginBottom: 24,
          }}
        >
          {COPY.one.kicker}
        </div>
        <div style={{fontSize: 82, lineHeight: 1.08, fontWeight: 800, color: COLORS.green}}>
          {COPY.one.title}
        </div>
        <div style={{fontSize: 34, lineHeight: 1.5, color: COLORS.deep, marginTop: 18}}>
          {COPY.one.subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const NODES = [
  {x: 520, y: 600, r: 112, label: COPY.two.nodes[0]},
  {x: 1320, y: 520, r: 96, label: COPY.two.nodes[1]},
  {x: 940, y: 860, r: 126, label: COPY.two.nodes[2]},
];

const Icon: React.FC<{kind: number}> = ({kind}) => {
  if (kind === 0) {
    return (
      <g fill={COLORS.green}>
        <circle cx="0" cy="-16" r="24" />
        <circle cx="-36" cy="22" r="18" />
        <circle cx="36" cy="22" r="18" />
      </g>
    );
  }
  if (kind === 1) {
    return (
      <g fill="none" stroke={COLORS.green} strokeWidth="9" strokeLinecap="round">
        <rect x="-34" y="-42" width="68" height="84" rx="12" />
        <path d="M-18 -12H18 M-18 8H18 M-18 28H2" />
      </g>
    );
  }
  return (
    <g fill="none" stroke={COLORS.green} strokeWidth="10" strokeLinecap="round">
      <path d="M-48 -26H48 M-48 2H24 M-48 30H-2" />
      <circle cx="-34" cy="-48" r="9" fill={COLORS.yellow} stroke="none" />
    </g>
  );
};

const ShotTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const edges: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];

  return (
    <AbsoluteFill style={{background: COLORS.green, fontFamily: FONT}}>
      <div
        style={{
          position: 'absolute',
          left: 420,
          top: 60,
          width: 1080,
          height: 1080,
          borderRadius: '50%',
          background: '#0B8A48',
          opacity: 0.34,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 84,
          textAlign: 'center',
          color: COLORS.cream,
          fontSize: 46,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        {COPY.two.title}
      </div>
      <svg width="100%" height="100%" viewBox="0 0 1920 1080">
        {edges.map(([a, b], i) => {
          const p = interpolate(
            frame,
            [12 + i * 10, 58 + i * 8],
            [0, 1],
            {...clamp, easing: Easing.bezier(0.2, 0.7, 0.25, 1)}
          );
          return (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke={COLORS.cream}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="900"
              strokeDashoffset={900 * (1 - p)}
              opacity={0.95}
            />
          );
        })}
        {NODES.map((n, i) => {
          const pop = spring({frame: frame - (14 + i * 12), fps, config: SPRING});
          const size = 0.4 + 0.6 * Math.max(0, pop);
          return (
            <g
              key={n.label}
              transform={'translate(' + n.x + ' ' + n.y + ') scale(' + size + ')'}
            >
              <circle r={n.r + 16} fill="#0B9D4D" />
              <circle r={n.r} fill={COLORS.pale} stroke={COLORS.deep} strokeWidth="9" />
              <g transform="scale(0.92)">
                <Icon kind={i} />
              </g>
              <circle cx={n.r * 0.68} cy={-n.r * 0.66} r="15" fill={COLORS.yellow} />
            </g>
          );
        })}
      </svg>
      {NODES.map((n) => (
        <div
          key={n.label}
          style={{
            position: 'absolute',
            left: n.x - 80,
            top: n.y + n.r + 30,
            width: 160,
            textAlign: 'center',
            color: COLORS.cream,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          {n.label}
        </div>
      ))}
    </AbsoluteFill>
  );
};

const ShotThree: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - 4, fps, config: SPRING});
  const qr = Array.from({length: 13 * 13}, (_, i) => {
    const x = i % 13;
    const y = Math.floor(i / 13);
    const on = (x * 7 + y * 11 + x * y * 3) % 5 < 2;
    if (!on) return null;
    return (
      <rect
        key={i}
        x={x * 12}
        y={y * 12}
        width="9"
        height="9"
        rx="2"
        fill={COLORS.green}
      />
    );
  });

  return (
    <AbsoluteFill style={{background: COLORS.cream, fontFamily: FONT}}>
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          left: 510,
          top: 90,
          borderRadius: '50%',
          background: COLORS.pale,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 360,
          top: 150,
          width: 1200,
          height: 780,
          borderRadius: 34,
          background: COLORS.cream,
          border: '3px solid ' + COLORS.deep,
          boxShadow: '0 28px 70px rgba(0,35,15,.16)',
          transform: 'scale(' + (0.94 + 0.06 * Math.max(0, enter)) + ')',
          opacity: Math.min(1, Math.max(0, enter)),
          padding: 56,
          boxSizing: 'border-box',
        }}
      >
        <div style={{fontSize: 56, fontWeight: 800, color: COLORS.green}}>
          {COPY.three.title}
        </div>
        {COPY.three.bullets.map((t, i) => (
          <div
            key={t}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              marginTop: 38,
              fontSize: 32,
              color: COLORS.deep,
              opacity: interpolate(frame, [20 + i * 8, 34 + i * 8], [0, 1], clamp),
              transform:
                'translateX(' +
                interpolate(frame, [20 + i * 8, 34 + i * 8], [20, 0], clamp) +
                'px)',
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: COLORS.yellow,
              }}
            />
            {t}
          </div>
        ))}
        <div style={{display: 'flex', alignItems: 'center', gap: 36, marginTop: 54}}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '20px 38px',
              borderRadius: 60,
              background: COLORS.green,
              color: COLORS.cream,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {COPY.three.cta}
          </div>
          <div
            style={{
              width: 156,
              height: 156,
              padding: 12,
              borderRadius: 18,
              background: '#FFFFFF',
              border: '2px solid ' + COLORS.deep,
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 156 156">
              {qr}
            </svg>
          </div>
          <div style={{fontSize: 18, color: COLORS.deep, opacity: 0.6}}>
            {COPY.three.note}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Starter: React.FC = () => {
  const frame = useCurrentFrame();
  const wipeOne = interpolate(frame, WIPES.one, [0, 1.15, 1.15, 0], clamp);
  const wipeTwo = interpolate(frame, WIPES.two, [0, 1.15, 1.15, 0], clamp);

  return (
    <AbsoluteFill style={{background: COLORS.cream}}>
      <Sequence from={SHOTS.one.from} durationInFrames={SHOTS.one.duration}>
        <ShotOne />
      </Sequence>
      <Sequence from={SHOTS.two.from} durationInFrames={SHOTS.two.duration}>
        <ShotTwo />
      </Sequence>
      <Sequence from={SHOTS.three.from} durationInFrames={SHOTS.three.duration}>
        <ShotThree />
      </Sequence>

      <AbsoluteFill
        style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}
      >
        <div
          style={{
            width: 2200,
            height: 2200,
            borderRadius: '50%',
            background: COLORS.green,
            transform: 'scale(' + Math.max(0, wipeOne) + ')',
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}
      >
        <div
          style={{
            width: 2200,
            height: 2200,
            borderRadius: '50%',
            background: COLORS.cream,
            transform: 'scale(' + Math.max(0, wipeTwo) + ')',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
