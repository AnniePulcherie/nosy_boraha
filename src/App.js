import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Accueil from './composant/Accueil';
import Histoire from './composant/Histoire';
import Nature from './composant/Nature';
import Footer from './composant/Footer';
import Navbar from './composant/Navbar';
function App() {
  return (
    <div>
        <Navbar /> {/* Le menu apparaît en haut de toutes les pages */}
        <div className="content"> {/* Un conteneur pour le contenu principal */}
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/histoire" element={<Histoire />} />
                <Route path="/nature" element={<Nature />} />
                
            </Routes>
        </div>
        <Footer /> {/* Le pied de page apparaît en bas de toutes les pages */}
    </div>
  );
}

export default App;
