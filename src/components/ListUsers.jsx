import styles from './ListUsers.module.css';

const ListUsers = ({ users }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>E-mail</th>
          <th>Registered on</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.timestamp.toLocaleString('en-GB')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUsers;
