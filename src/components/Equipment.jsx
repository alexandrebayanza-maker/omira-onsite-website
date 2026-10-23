import { equipmentStrip } from '../data/content';
import './Equipment.css';

function Equipment() {
  return (
    <aside className="equipment" aria-label="Equipment">
      <div className="container">
        <p>{equipmentStrip.text}</p>
      </div>
    </aside>
  );
}

export default Equipment;
