// src/components/DisplayEmployee.jsx

function DisplayEmployee(props) {
  const {employee} = props;
  const {
    picture,
    gender,
    name,
    email,
    location
  } = employee;
  return (
    employee && (
      <div className='DisplayEmployee'>
        <img src={picture.medium} alt={name.first} />
        <ul>
          <li>Gender: {gender}</li>
          <li>
            Name: {name.title} {name.last}{' '}
            {name.first}
          </li>
          <li>E-mail: {email}</li>
          <li>
            Location: {location.street.number}{' '}
            {location.street.name}, {location.postcode}{' '}
            {location.city}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplayEmployee;