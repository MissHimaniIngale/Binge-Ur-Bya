// Logo.jsx  —  Binge ur ब्या animated wordmark
// Usage:
//   import Logo from './Logo'
//   <Logo size="hero"  />   // 92px  — hero section
//   <Logo size="nav"   />   // 26px  — navbar
//   <Logo size="pl"    />   // 64px  — preloader
//   <Logo size="ft"    />   // 30px  — footer (no entry anim)
//
// Requires:  logo.module.css  (same keyframes + classes)
//            Google Fonts loaded globally (see README)

import React from 'react'
import s from './logo.module.css'

const SIZES = {
  hero : { cls: s.logoHero,  size: 92  },
  nav  : { cls: s.logoNav,   size: 26  },
  pl   : { cls: s.logoPl,    size: 64  },
  ft   : { cls: s.logoFt,    size: 30  },
}

export default function Logo({ size = 'hero', style = {} }) {
  const ctx = SIZES[size] || SIZES.hero
  return (
    <div
      className={[s.logo, ctx.cls].join(' ')}
      style={{ '--lsize': `${ctx.size}px`, ...style }}
    >
      {/* ── BINGE row ── */}
      <div className={s.bingeRow}>
        <span className={[s.lt, s.lB].join(' ')}>B</span>
        <span className={[s.lt, s.li].join(' ')}>i</span>
        <span className={[s.lt, s.ln].join(' ')}>n</span>
        <span className={[s.lt, s.lg].join(' ')}>g</span>
        <span className={[s.lt, s.le].join(' ')}>e</span>
      </div>

      {/* ── Short line + hanging ब्या ── */}
      <div className={s.lineZone}>
        <div className={s.theLine}>
          <div className={s.lineTip} />
          <div className={s.thread} />
        </div>
        <div className={s.byaWrap}>
          <span className={s.bya}>ब्या</span>
          <span className={s.byaSh}>ब्या</span>
        </div>
      </div>

      {/* ── ur row ── */}
      <div className={s.urRow}>
        <div className={[s.orn, s.ornL].join(' ')} />
        <span className={s.ur}>ur</span>
        <div className={[s.orn, s.ornR].join(' ')} />
      </div>
    </div>
  )
}
