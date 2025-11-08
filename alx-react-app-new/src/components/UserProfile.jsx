const UserProfile = (props) => {
  return (
    <div style={{border = {{border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <h2 style={{color = {{color: 'blue'}}>User's name: {props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style = {{color: 'blue'}}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
