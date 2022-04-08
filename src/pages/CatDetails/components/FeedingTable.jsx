const FeedingTable = ({ cat }) => {
  return (
    <table>
      <thead>
        <tr><th>Date</th><th>Meal</th></tr>
      </thead>
      <tbody>
        {cat.feedings.map((feeding) =>
          <tr key={feeding.id}>
            <td>{feeding.date}</td>
            <td>
              {feeding.meal === 'B' && 'Breakfast'}
              {feeding.meal === 'L' && 'Lunch'}
              {feeding.meal === 'D' && 'Dinner'}
            </td>
          </tr>
        ).reverse().slice(0, 3)}
      </tbody>
    </table>
  )
}

export default FeedingTable