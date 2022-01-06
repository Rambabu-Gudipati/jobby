import './index.css'

const Filter = props => {
  const {
    eList,
    salaryList,
    onCheckSalary,
    onCheckEmp,
    eTypeValue,
    salaryValue,
  } = props

  const typeOfEmployment = () => (
    <ul className="employ-class">
      {eList.map(each => {
        const {label, employmentTypeId} = each
        const onCheck2 = () => {
          onCheckEmp(employmentTypeId)
        }
        return (
          <li className="check-box" key={employmentTypeId}>
            <input
              id={employmentTypeId}
              type="checkbox"
              value={eTypeValue}
              onClick={onCheck2}
            />
            <label htmlFor={employmentTypeId} className="label">
              {label}
            </label>
          </li>
        )
      })}
    </ul>
  )

  const salaryRange = () => (
    <ul className="employ-class">
      {salaryList.map(each => {
        const {label, salaryRangeId} = each
        const onCheck = () => {
          onCheckSalary(salaryRangeId)
        }

        return (
          <li className="check-box" key={salaryRangeId}>
            <input
              id={salaryRangeId}
              type="radio"
              value={salaryValue}
              onClick={onCheck}
            />
            <label htmlFor={salaryRangeId} className="label">
              {label}
            </label>
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="filter-cont">
      <h1 className="filter-head">Type of Employment</h1>
      {typeOfEmployment()}
      <hr className="line-filter" />
      <h1 className="filter-head">Salary Range</h1>
      {salaryRange()}
    </div>
  )
}

export default Filter
