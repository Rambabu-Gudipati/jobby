const Skills = props => {
  const {skillList} = props

  const change = List1 => ({
    name: List1.name,
    imageUrl: List1.image_url,
  })

  const getChange = change(skillList)
  const {imageUrl, name} = getChange
  return (
    <li className="row1">
      <img src={imageUrl} alt={name} className="skill-img" />
      <p className="life-content">{name}</p>
    </li>
  )
}

export default Skills
