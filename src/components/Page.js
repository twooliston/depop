const Page = (props) => {
  return (
    <div className="page">
      <div>
        <p>This is the {props.page} page</p>
      </div>
      <button className="button">Sign up here</button>
    </div>
  );
};

export default Page;
