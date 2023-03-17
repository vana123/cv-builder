import { IExperiance } from "../models/Icv";
import { useState } from 'react';
import { DataWithId } from "../hooks/useCVDataBlock";
type Props={
    defaultValue: DataWithId<IExperiance>,
    geterResult: (Data: IExperiance) => void
}
export default function EditExperiance({ defaultValue, geterResult }: Props) {
    const [formData, setFormData]=useState<IExperiance>(defaultValue.data||{})

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
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                company name:
                    <input
                        type="text"
                        name="company"
                        value={formData.company||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                is working Now
                    <input
                        type="checkbox"
                        name="isworkingNow"
                        checked={formData.isworkingNow||false}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Save chenge</button>
            </form>
        </div>
    );
}