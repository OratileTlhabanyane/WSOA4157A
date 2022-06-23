  function Next(props) {
    return (
      <button onClick={props.toggle} disabled={props.active}>Next</button>
    );
  }

  export default Next;
