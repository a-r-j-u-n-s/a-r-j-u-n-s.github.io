import './MusicContainer.css'
import YoutubeEmbed from '../YoutubeEmbed'

const MusicContainer = ({ music }) => (
    <div className='music'>
        <h3>{music.name}</h3>
        <YoutubeEmbed embedId={music.embedId}/>
        <p className='music__description'>{music.description}</p>
    </div>
)

export default MusicContainer
