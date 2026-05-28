import MiembrosEquipo from './MiembrosEquipo';
import MiembrosHonorarios from './MiembrosHonorarios';

export default function Team() {
return (
<>
    <div className="team-section">
    <MiembrosEquipo />
    <MiembrosHonorarios />
    </div>
    
</>
);
}