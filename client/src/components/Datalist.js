export default function Datalist(props) {
  console.log(props.data)
  return (
    <section className="dataList">
      <div>
        { Array.isArray(props.data) && props.data.map(elem => (
          <div className="dataRow" key={elem._id}>{elem.notes}. &nbsp;&nbsp; Category: {elem.category}, &nbsp;&nbsp; amount: {elem.amount}, &nbsp;&nbsp; time: {elem.depositDate}</div>
        ))}
      </div>
    </section>
  );
}