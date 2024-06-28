function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.name}
          placeholder={props.namePlaceholder}
          onChange={props.onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={props.email}
          placeholder={props.emailPlaceholder}
          onChange={props.onChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
