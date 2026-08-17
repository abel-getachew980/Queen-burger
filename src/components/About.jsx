import { useState, useRef } from 'react'
import { Volume2, VolumeX, Play, Pause, Sparkles, Flame, CheckCircle2 } from 'lucide-react'
import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="about" id="about">
      <div className={`container about-grid ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="about-media">
          <div className="about-video-wrapper">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="about-video"
            >
              <source src="/asset/86e97ca2314850808effb680a7a59dbb.mp4" type="video/mp4" />
            </video>

            {/* Interactive Video Controls Overlay */}
            <div className="video-controls-overlay">
              <button
                className="video-control-btn"
                onClick={toggleMute}
                title={isMuted ? t('about.videoMute') : t('about.videoUnmute')}
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                <span>{isMuted ? t('about.videoMute') : t('about.videoUnmute')}</span>
              </button>

              <button
                className="video-control-btn"
                onClick={togglePlay}
                title={isPlaying ? t('about.videoPause') : t('about.videoPlay')}
                aria-label="Toggle Playback"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="about-text">
          <span className="section-label">{t('about.label')}</span>
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>

          <div className="about-highlights">
            <div className="about-highlight-chip">
              <Flame size={18} className="highlight-icon" />
              <span>{t('about.highlights.freshBeef')}</span>
            </div>
            <div className="about-highlight-chip">
              <Sparkles size={18} className="highlight-icon" />
              <span>{t('about.highlights.toastedBun')}</span>
            </div>
            <div className="about-highlight-chip">
              <CheckCircle2 size={18} className="highlight-icon" />
              <span>{t('about.highlights.secretSauce')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
