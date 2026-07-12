import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { pillars, audits, bonus, viralFactors, insights } from './data.js'

/* ---------- helpers ---------- */

const ease = [0.22, 1, 0.36, 1]

function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  )
}

function SectionTag({ index, children }) {
  return (
    <div className="sec-tag">
      <span className="sec-tag__no">{index}</span>
      <span className="sec-tag__line" />
      <span className="sec-tag__label">{children}</span>
    </div>
  )
}

/* ---------- audit card ---------- */

function AuditCard({ item, flip, bonus = false }) {
  return (
    <Reveal className={`audit ${flip ? 'audit--flip' : ''} ${bonus ? 'audit--bonus' : ''}`}>
      <div className="audit__frame">
        <div className="audit__phone">
          <div className="audit__notch" />
          <div className="audit__screen">
            <span className="audit__bignum">{item.no}</span>
            {bonus && <span className="audit__badge">Emerging</span>}
            <div className="audit__scrollcue">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      <div className="audit__body">
        <p className="audit__type">{item.type}</p>
        <h3 className="audit__title">{item.title}</h3>

        <dl className="audit__grid">
          <div><dt>Cách kể</dt><dd>{item.tell}</dd></div>
          <div><dt>Điểm thu hút</dt><dd>{item.hook}</dd></div>
          <div><dt>Giá trị văn hóa</dt><dd>{item.value}</dd></div>
          <div className="audit__risk"><dt>Rủi ro</dt><dd>{item.risk}</dd></div>
        </dl>

        <blockquote className="audit__insight">
          <span className="audit__insight-key">Insight</span>
          {item.insight}
        </blockquote>

        {item.quote && (
          <p className="audit__hoquote">
            “{item.quote}”
            <cite>— {item.quoteBy} —</cite>
          </p>
        )}

        <div className="audit__examples">
          {item.examples.map((ex, i) =>
            ex.url ? (
              <a key={i} href={ex.url} target="_blank" rel="noreferrer" className="chip chip--link">
                {ex.label} <span className="chip__arrow">↗</span>
              </a>
            ) : (
              <span key={i} className="chip">{ex.label}</span>
            ),
          )}
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- page ---------- */

export default function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fadeHero = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="page">
      <div className="grain" aria-hidden />

      {/* top rail */}
      <header className="rail">
        <span className="rail__code">SPST · C6 · 01</span>
        <span className="rail__mid">Chương 6 — Vấn đề dân tộc &amp; tôn giáo</span>
        <span className="rail__dot">TikTok Culture Audit</span>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero" ref={heroRef}>
        <motion.div className="hero__bg" style={{ y: yBg }} aria-hidden>
          <span className="hero__glyph hero__glyph--1">囍</span>
          <span className="hero__glyph hero__glyph--2">卍</span>
          <span className="hero__ci">▶</span>
        </motion.div>

        <motion.div className="hero__inner" style={{ opacity: fadeHero }}>
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.32em' }}
            transition={{ duration: 1, ease }}
          >
            Dân tộc · Bản sắc · Truyền thông số
          </motion.p>

          <h1 className="hero__title">
            {['TikTok', 'Culture', 'Audit'].map((w, i) => (
              <motion.span
                key={w}
                className={i === 2 ? 'gold' : ''}
                initial={{ opacity: 0, y: '110%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.12 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            Văn hóa truyền thống đang được <em>kể lại</em> thế nào?
            Giải mã cách các nhà sáng tạo trẻ “hack” thuật toán bằng chất liệu di sản —
            biến những giá trị ngàn năm thành ngôn ngữ thị giác bùng nổ trên không gian số.
          </motion.p>

          <motion.div
            className="hero__q"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="hero__q-mark">?</span>
            <p>
              Khi văn hóa truyền thống bước vào TikTok, nó đang được
              <b> giữ nguyên</b>, <b>làm mới</b> hay <b>biến đổi</b>?
            </p>
          </motion.div>
        </motion.div>

        <div className="hero__scroll">
          <span>Cuộn để khám phá</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* running banner */}
      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              Văn hóa Việt Nam tỏa sáng trên TikTok <i>✶</i> Lan tỏa bản sắc từ những video triệu view <i>✶</i>
            </span>
          ))}
        </div>
      </div>

      {/* ============ THE SHIFT ============ */}
      <section className="shift wrap">
        <SectionTag index="01">Bức tranh biến đổi · The Shift</SectionTag>
        <div className="shift__cols">
          <Reveal className="shift__before">
            <h4>Trước đây</h4>
            <p>
              Văn hóa truyền thống thường được tiếp cận qua sách vở, bảo tàng, lớp học,
              lễ hội hoặc những câu chuyện gia đình. Với nhiều người trẻ, văn hóa đôi khi
              bị xem là <em>khô khan, xa cách</em> và khó liên hệ với đời sống hiện đại.
            </p>
          </Reveal>
          <Reveal className="shift__after" delay={0.12}>
            <h4>Ngày nay</h4>
            <p>
              TikTok tạo ra một không gian mới để văn hóa được kể lại bằng ngôn ngữ của thế hệ trẻ.
              Lịch sử, bản sắc, trang phục, âm nhạc dân gian, làng nghề thủ công không còn nằm
              trong không gian học thuật — mà xuất hiện trong những video ngắn,
              <em> dễ xem, dễ chia sẻ, dễ lan tỏa</em>.
            </p>
          </Reveal>
        </div>

        <Reveal className="shift__pull" delay={0.1}>
          <p>
            Văn hóa không biến mất.<br />
            Văn hóa đang <span className="gold">chuyển mình</span>.
          </p>
          <span className="shift__pull-sub">
            Từ một giá trị được “bảo tồn” → chất liệu sáng tạo sống động trong đời sống số.
          </span>
        </Reveal>
      </section>

      {/* ============ ANATOMY ============ */}
      <section className="anatomy wrap">
        <SectionTag index="02">Giải mã công thức kể chuyện · The Anatomy</SectionTag>
        <Reveal as="h2" className="sec-head">
          Ba trụ cột đang định hình cách các TikToker kể chuyện di sản
        </Reveal>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.id} className="pillar" delay={i * 0.1}>
              <span className="pillar__no">{p.id}</span>
              <span className="pillar__key">{p.key}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ AUDIT ============ */}
      <section className="auditsec wrap">
        <SectionTag index="03">Audit nội dung · The Fieldwork</SectionTag>
        <Reveal as="h2" className="sec-head">
          Năm dạng nội dung TikTok về văn hóa truyền thống
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={0.08}>
          Mỗi mẫu được soi qua cùng một khung: cách kể, điểm thu hút, giá trị văn hóa và rủi ro.
        </Reveal>

        <div className="audit-list">
          {audits.map((a, i) => (
            <AuditCard key={a.no} item={a} flip={i % 2 === 1} />
          ))}
          <AuditCard item={bonus} flip={audits.length % 2 === 1} bonus />
        </div>
      </section>

      {/* ============ CULTURE vs ALGORITHM ============ */}
      <section className="versus">
        <div className="versus__inner wrap">
          <SectionTag index="04">Văn hóa &amp; thuật toán · Culture × Algorithm</SectionTag>
          <div className="versus__grid">
            <Reveal className="versus__culture">
              <h3>Văn hóa</h3>
              <p>
                Sự lan tỏa của nội dung văn hóa không chỉ đến từ giá trị truyền thống,
                mà còn từ cách nội dung <em>khớp với thuật toán</em> nền tảng.
              </p>
              <p className="versus__note">
                Culture Audit không chỉ nhìn lượt xem — mà phân tích xem nội dung đang
                <b> giữ gìn</b>, <b>làm mới</b> hay <b>làm lệch</b> bản sắc.
              </p>
            </Reveal>

            <Reveal className="versus__algo" delay={0.12}>
              <h3>Thuật toán</h3>
              <ul className="versus__factors">
                {viralFactors.map((f, i) => (
                  <li key={i}><span>{String(i + 1).padStart(2, '0')}</span>{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="versus__tension" delay={0.1}>
            <p>
              Khi văn hóa phải thích nghi với thuật toán —
              liệu giá trị truyền thống có bị <span className="neon">đơn giản hóa</span> hoặc
              <span className="neon"> biến dạng</span> không?
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SUMMARY INSIGHTS ============ */}
      <section className="summary wrap">
        <SectionTag index="05">Tổng kết &amp; đánh giá · Insights</SectionTag>
        <Reveal as="h2" className="sec-head">Năm insight chính rút ra từ dự án</Reveal>
        <div className="insights">
          {insights.map((it, i) => (
            <Reveal key={it.no} className="insight" delay={i * 0.06}>
              <span className="insight__no">{it.no}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FINAL MESSAGE ============ */}
      <section className="final">
        <div className="grain grain--soft" aria-hidden />
        <Reveal className="final__inner">
          <p className="final__kicker">Thông điệp kết luận</p>
          <p className="final__big">
            Trong không gian số, bản sắc dân tộc <span className="gold">không mất đi</span>.
            Nó đang được tái hiện qua những hình thức mới — nơi mỗi video ngắn
            trở thành một điểm chạm đưa người trẻ đến gần hơn với lịch sử,
            con người và giá trị văn hóa Việt Nam.
          </p>
          <p className="final__foot">
            Vấn đề không nằm ở việc Gen Z có quan tâm văn hóa hay không —
            mà là văn hóa được kể bằng cách nào để họ muốn <em>dừng lại, xem tiếp,
            bình luận và chia sẻ</em>.
          </p>
        </Reveal>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="foot wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <span className="foot__lotus">🪷</span>
            <div>
              <strong>TikTok Culture Audit</strong>
              <span>Chương 6 — Vấn đề dân tộc và tôn giáo</span>
            </div>
          </div>
          <span className="foot__code">SPST-C6-01</span>
        </div>

        <div className="foot__keys">
          {['Dân tộc', 'Bản sắc', 'Truyền thông số', 'Văn hóa truyền thống', 'TikTok'].map((k) => (
            <span key={k} className="chip chip--foot">{k}</span>
          ))}
        </div>

        <div className="foot__appendix">
          <h4>Phụ lục AI</h4>
          <ul className="foot__appendix-list">
            {[
              {
                tool: 'ChatGPT',
                purpose: 'Tra cứu, tổng hợp thông tin nền và lên dàn ý ban đầu',
                scope: 'Phần nội dung audit 6 dạng TikTok và insight tổng kết',
              },
              {
                tool: 'Claude',
                purpose: 'Code, thiết kế giao diện và biên tập lại câu chữ',
                scope: 'Toàn bộ landing page (bố cục, style, hiệu ứng)',
              },
            ].map((a) => (
              <li key={a.tool}>
                <strong>{a.tool}</strong> — {a.purpose}
                <span className="foot__appendix-scope">{a.scope}</span>
              </li>
            ))}
          </ul>
          <p className="foot__appendix-note">
            Nội dung đã được nhóm kiểm tra, chỉnh sửa và chịu trách nhiệm trước khi đăng tải.
          </p>
        </div>

        <p className="foot__sign">Thiết kế &amp; biên tập nội dung · TikTok Culture Audit Project · 2026</p>
      </footer>
    </div>
  )
}
