import { useState } from 'react';
import "../../scss/components/CVForm.scss"
import { Icv, IEducation, IExperiance, ISkil, ISocial, ITag } from "../../models/Icv"
import { RowTag, RowEducation, RowExperience, RowSkil, RowSocial } from '../../components/CVform/RowBlockDatas'
import { EditEducation, EditExperiance, EditSkil, EditSocial, EditTag } from '../../components/CVform/modalForms'
import useCVDataBlok from '../../hooks/useCVDataBlock';
// import { CVForm } from '@/components/CVform/CVForm';


export default function CVForm() {
    const [formData, setFormData]=useState<Icv>({
        id: 1,
        title: '',
        education: [],
        experiance: [],
        skils: [],
        socials: []
    })
    const handleInputChange=(
        event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
    ) => {
        const { name, value }=event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const social=useCVDataBlok<ISocial>(EditSocial)
    const education=useCVDataBlok<IEducation>(EditEducation)
    const experiance=useCVDataBlok<IExperiance>(EditExperiance)
    const skil=useCVDataBlok<ISkil>(EditSkil)
    const tag=useCVDataBlok<ITag>(EditTag)

    const submitHandler=(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <>
            {social.ModalData}
            {education.ModalData}
            {experiance.ModalData}
            {skil.ModalData}
            {tag.ModalData}
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
                <button type='button' onClick={social.createData}>add social</button>
                {social.Data.map((item) => (
                    <RowSocial
                        key={item.id}
                        values={item}
                        onRemuve={social.remuveData}
                        onEdit={social.editData}
                    />
                ))}
                <button type='button' onClick={education.createData}>add education</button>
                {education.Data.map((item) => (
                    <RowEducation
                        key={item.id}
                        values={item}
                        onRemuve={education.remuveData}
                        onEdit={education.editData}
                    />
                ))}
                <button type='button' onClick={experiance.createData}>add experience</button>
                {experiance.Data.map((item) => (
                    <RowExperience
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={experiance.remuveData}
                        onEdit={experiance.editData}
                    />
                ))}
                <button type='button' onClick={skil.createData}>add skils</button>
                {skil.Data.map((item) => (
                    <RowSkil
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={skil.remuveData}
                        onEdit={skil.editData}
                    />
                ))}
                <button type='button' onClick={tag.createData}>add tag</button>
                {tag.Data.map((item) => (
                    <RowTag
                        key={item.id}
                        values={{ ...item }}
                        onRemuve={tag.remuveData}
                        onEdit={tag.editData}
                    />
                ))}
                <button type='submit'>Save</button>
            </form>
        </>
    );
}