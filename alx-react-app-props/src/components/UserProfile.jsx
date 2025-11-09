const UserProfile = (props) => {
  return (
    <div style = {{backgroundColor: 'navy', padding: '5px'}}>
      <h2 style = {{color: 'orange'}}>User's name: {props.name}</h2>
      <p style = {{color: 'orange'}}>Age: {props.age}</p>
      <p style = {{color: 'orange'}}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
