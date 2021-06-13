
export default function Status({message}) {
  return (
    <div className="status-component">
      <img
        className="status-image"
        src="icons/status.png"
        alt="Loading"
      />
      <h1>{message}</h1>
    </div>
  );
}