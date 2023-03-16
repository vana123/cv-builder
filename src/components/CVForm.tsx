import { useState } from 'react';
import '../scss/components/CVForm.scss'
import { Icv, IEducation, IExperiance, ISkil } from '../models/Icv';
import RowEducation from './CVform/RowEducation';
import Modal from './Modal';
import EditEducation from './EditEducation';
import EditExperiance from './EditExperiance';
import RowExperience from './CVform/RowExperience';
import EditSkil from './EditSkil';
import RowSkil from './CVform/RowSkil';
import EditSocial from './EditSocial';
import RowSocial from './CVform/RowSocial';
export default function CVForm() {
    const [formData, setFormData]=useState<Icv>({
        id: 1,
        title: '',
        education: [],
        experiance: [],
        skils: [],
        socials: []
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

    const [counterIdExperience, setCounterIdExperience]=useState<number>(0)
    const pushExperience=(obj: IExperiance) => {
        setCounterIdExperience((prevCounterIdExperience) => (prevCounterIdExperience+1))
        setFormData((prevFormData) => ({
            ...prevFormData,
            experiance: [...prevFormData.experiance, obj],
        }));
        setIsVisibleModal(false)
    }
    const createExperience=() => {
        setModalJSX(<EditExperiance
            defaultValue={{ id: counterIdExperience }}
            geterResult={pushExperience}
        />)
        setIsVisibleModal(true)
    };
    const remuveExperience=(id: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            experiance: prevFormData.experiance.filter((obj) => obj.id!==id),
        }));
    }
    const editExperience=(id: number) => {
        setModalJSX(<EditExperiance
            defaultValue={formData.experiance.find((obj) => obj.id===id)}
            geterResult={(newObj: IExperiance) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    experiance: prevFormData.experiance.map(
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

    const [counterIdSkil, setCounterIdSkil]=useState<number>(0)
    const pushSkil=(obj: ISkil) => {
        setCounterIdSkil((prevCounterIdSkil) => (prevCounterIdSkil+1))
        setFormData((prevFormData) => ({
            ...prevFormData,
            skils: [...prevFormData.skils, obj],
        }));
        setIsVisibleModal(false)
    }
    const createSkil=() => {
        setModalJSX(<EditSkil
            defaultValue={{ id: counterIdSkil }}
            geterResult={pushSkil}
        />)
        setIsVisibleModal(true)
    };
    const remuveSkil=(id: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            skils: prevFormData.skils.filter((obj) => obj.id!==id),
        }));
    }
    const editSkil=(id: number) => {
        setModalJSX(<EditSkil
            defaultValue={formData.skils.find((obj) => obj.id===id)}
            geterResult={(newObj: IExperiance) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    skils: prevFormData.skils.map(
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

    const [counterIdSocial, setCounterIdSocial]=useState<number>(0)
    const pushSocial=(obj: ISkil) => {
        setCounterIdSocial((prevCounterIdSocial) => (prevCounterIdSocial+1))
        setFormData((prevFormData) => ({
            ...prevFormData,
            socials: [...prevFormData.socials, obj],
        }));
        setIsVisibleModal(false)
    }
    const createSocial=() => {
        setModalJSX(<EditSocial
            defaultValue={{ id: counterIdSocial }}
            geterResult={pushSocial}
        />)
        setIsVisibleModal(true)
    };
    const remuveSocial=(id: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            socials: prevFormData.socials.filter((obj) => obj.id!==id),
        }));
    }
    const editSocial=(id: number) => {
        setModalJSX(<EditSocial
            defaultValue={formData.socials.find((obj) => obj.id===id)}
            geterResult={(newObj: IExperiance) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    socials: prevFormData.socials.map(
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
                    Title CV:
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
                <button type='button' onClick={createSocial}>add social</button>
                {formData.socials.map((item) => (
                    <RowSocial
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={remuveSocial}
                        onEdit={editSocial}
                    />
                ))}
                <button type='button' onClick={createEducation}>add education</button>
                {formData.education.map((item) => (
                    <RowEducation
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={remuveEducation}
                        onEdit={editEducation}
                    />
                ))}
                <button type='button' onClick={createExperience}>add experience</button>
                {formData.experiance.map((item) => (
                    <RowExperience
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={remuveExperience}
                        onEdit={editExperience}
                    />
                ))}
                <button type='button' onClick={createSkil}>add skils</button>
                {formData.skils.map((item) => (
                    <RowSkil
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={remuveSkil}
                        onEdit={editSkil}
                    />
                ))}
                <button type='submit'>Save</button>
            </form>
        </>
    );
}