import tcss from './TransactionHistory.module.css';

const Head = () => {
    return (
      <thead className={tcss.head}>
        <tr>
          <td className={tcss.cell}>Type</td>
          <td className={tcss.cell}>Amount</td>
          <td className={tcss.cell}>Currency</td>
        </tr>
      </thead>
    );
  };

const Row = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }, index) => (
        <tr key={id} className={index % 2 === 0 ? tcss.activeCell : tcss.notActive}>
          <td className={tcss.cell}>{type}</td>
          <td className={tcss.cell}>{amount}</td>
          <td className={tcss.cell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

export const TransactionHistory = ({transactions}) => {
    return (
        <table className={tcss.table}>
        <Head />
        <Row transactions={transactions}/>
        </table>
    )
}