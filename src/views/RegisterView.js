import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  header: {
    color: 'purple',
    fontSize: 20,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    fontSize: '20px',
    color: 'purple',
    fontWeight: 700,
  },
  input: {
    width: '100 %',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginTop: '6px',
    marginBottom: '16px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: 'white',
    color: ' purple',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.header}>☛ Signup page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            style={styles.input}
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            style={styles.input}
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            style={styles.input}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
}
