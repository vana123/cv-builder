import { ITag } from "../../../models/Icv";
import { useState } from 'react';
import { DataWithId } from "../../../hooks/useCVDataBlock";

type Props={
    defaultValue: DataWithId<ITag>,
    geterResult: (Data: ITag) => void
}
export default function EditTag({ defaultValue, geterResult }: Props) {
    const [formData, setFormData]=useState<ITag>(defaultValue.data||{})

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
                    Tag name:
                    <input
                        type="text"
                        name="title"
                        value={formData.title||""}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Save chenge</button>
            </form>
        </div>
    );
}