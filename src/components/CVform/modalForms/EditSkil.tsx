import { ISkil } from "../../../models/Icv";
import { useState } from 'react';
import { DataWithId } from "../../../hooks/useCVDataBlock";

type Props={
    defaultValue: DataWithId<ISkil>,
    geterResult: (Data: ISkil) => void
}
export default function EditSkil({ defaultValue, geterResult }: Props) {
    const [formData, setFormData]=useState<ISkil>(defaultValue.data||{})


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
                    Skils:
                    <input
                        type="text"
                        name="title"
                        value={formData.title||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Count:
                    <input
                        type="number"
                        name="count"
                        value={formData.count|| 0}
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Save chenge</button>
            </form>
        </div>
    );
}