export default function ScanExtractData({ responseData }) {
  return (
    <section className="extracted-data">
      Total Amount: {responseData?.totalAmount?.data}
      <br />
      Date: {responseData?.date?.data}
    </section>
  );
}
