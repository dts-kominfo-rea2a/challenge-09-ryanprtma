import './App.css';
import Header from './components/Header'
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact props={contacts[0]} />
      <Contact props={contacts[1]} />
      <Contact props={contacts[2]} />
      <Contact props={contacts[3]} />
      <Contact props={contacts[4]} />
      <Contact props={contacts[5]} />
    </div>
  );
}

export default App;
