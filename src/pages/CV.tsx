import { useParams } from "react-router-dom";

export default function CV() {
    const {cvId} = useParams()
    
    return (
      <div>
        <h2>cv</h2>
        <p>{cvId}</p>
      </div>
    );
  }