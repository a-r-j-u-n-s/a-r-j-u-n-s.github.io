import uniqid from 'uniqid'
import { music } from '../../portfolio'
import MusicContainer from '../MusicContainer/MusicContainer'
import './Music.css'
import '../Projects/Projects.css'

const Music = () => {
  if (!music.length) return null

  return (
    <section id='music' className='section projects'>
      <h2 className='section__title'>music</h2>

      <div className='music__grid'>
        {music.map((musicProject) => (
          <MusicContainer key={uniqid()} music={musicProject} />
        ))}
      </div>
    </section>
  )
}

export default Music
