import '../scss/pages/CreateCV.scss'
import CVForm from '../components/CVForm';
export default function CreateCV() {
    return (
        <div className="container">
            <div className="CreateCV">
                <div className="CreateCV__colum">
                    <CVForm/>
                </div>
                <div className="CreateCV__colum">

                </div>
            </div>
        </div>
    );
}