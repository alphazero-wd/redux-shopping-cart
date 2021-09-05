const Loading = () => {
  return (
    <div className="text-center container my-5">
      <div
        className="spinner-border text-primary"
        style={{ width: '6rem', height: '6rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
