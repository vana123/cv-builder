import { useState } from 'react';
import '../scss/components/CVForm.scss'
import { Icv, IEducation } from '../models/Icv';
import RowEducation from './CVform/RowEducation';
import Modal from './Modal';
import EditEducation from './EditEducation';
export default function CVForm() {
    const [formData, setFormData]=useState<Icv>({
        id: 1,
        title: '',
        education: []
    })
    const [isVisibleModal, setIsVisibleModal]=useState<boolean>(false)
    const [modalJSX, setModalJSX]=useState<JSX.Element>(<></>)

    const handleInputChange=(
        event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
    ) => {
        const { name, value }=event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const [counterIdEducation, setCounterIdEducation]=useState<number>(0)
    const pushEducation=(obj: IEducation) => {
        setCounterIdEducation((prevCounterIdEducation) => (prevCounterIdEducation+1))
        setFormData((prevFormData) => ({
            ...prevFormData,
            education: [...prevFormData.education, obj],
        }));
        setIsVisibleModal(false)
    }
    const createEducation=() => {
        setModalJSX(<EditEducation
            defaultValue={{ id: counterIdEducation }}
            geterResult={pushEducation}
        />)
        setIsVisibleModal(true)
    };
    const remuveEducation=(id: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            education: prevFormData.education.filter((obj) => obj.id!==id),
        }));
    }
    const editEducation=(id: number) => {
        setModalJSX(<EditEducation
            defaultValue={formData.education.find((obj) => obj.id===id)}
            geterResult={(newObj: IEducation) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    education: prevFormData.education.map(
                        (obj) => {
                            if (obj.id===id) {
                                return (newObj)
                            } else {
                                return obj
                            }
                        }
                    ),
                }));
                setIsVisibleModal(false)
            }}
        />)
        setIsVisibleModal(true)
    }
    
    const submitHandler=(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <>
            <Modal
                isVisible={isVisibleModal}
                onClose={() => { setIsVisibleModal(false) }}
                children={modalJSX}
            />
            <form className="CVForm" onSubmit={submitHandler}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Job Intention:
                    <input
                        type="text"
                        name="jobIntention"
                        value={formData.jobIntention}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    About:
                    <input
                        type="text"
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                    />
                </label>
                <button type='button' onClick={createEducation}>add education</button>
                {formData.education.map((item) => (
                    <RowEducation
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={remuveEducation}
                        onEdit={editEducation}
                    />
                ))}
                <button type='submit'>Save</button>
            </form>
        </>
    );
}