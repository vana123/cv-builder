import { IEducation } from "../models/Icv";
import { useState } from 'react';
import { DataWithId } from "../hooks/useCVDataBlock";

type Props={
    defaultValue: DataWithId<IEducation>,
    geterResult: (Data: IEducation) => void
}
export default function EditEducation({ defaultValue, geterResult }: Props) {
    const [formData, setFormData]=useState<IEducation>(defaultValue.data||{})
    const handleInputChange=(
        event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
    ) => {
        const { name, value }=event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const submitHandler=(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        geterResult(formData)
    }
    return (
        <div className="EditEducation">
            <form onSubmit={submitHandler}>
                <label>
                    School / College
                    <input
                        type="text"
                        name="title"
                        value={formData.title||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Degree
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Field of study
                    <input
                        type="text"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Grade
                    <input
                        type="text"
                        name="grade"
                        value={formData.grade||''}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Save chenge</button>
            </form>
        </div>
    );
}