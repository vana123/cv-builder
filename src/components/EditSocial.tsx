import { ISkil, ISocial } from "../models/Icv";
import { useState } from 'react';
import { TiSocialSkypeOutline } from "react-icons/ti";

type Props={
    defaultValue?: ISocial
    geterResult: (educationFormData: ISocial) => void
}
export default function EditSocial({ defaultValue, geterResult }: Props) {
    const [formData, setFormData]=useState(defaultValue||{ id: 9999 })

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
                    Social:
                    <input
                        type="text"
                        name="title"
                        value={formData.title||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Nicname:
                    <input
                        type="text"
                        name="text"
                        value={formData.text||''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Link:
                    <input
                        type="text"
                        name="href"
                        value={formData.href||''}
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Save chenge</button>
            </form>
        </div>
    );
}