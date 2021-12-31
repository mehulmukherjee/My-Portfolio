import uniqid from 'uniqid'
import './ExContainer.css'

const ExContainer = ({ experience }) => (
  <div className='experience'>

    <div>
    <h3>{experience.name}</h3>
    </div>
    <div>
    <p className='experience__description'>{experience.title}</p>
    <p className='experience__description'>{experience.tenure}</p>
    <p className='experience__description'>{experience.description}</p>
    </div>
    <div>
    {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    </div>
  </div>
)

export default ExContainer
