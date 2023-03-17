import { IEducation } from "../../models/Icv";
import '../../scss/components/Row.scss'
import { TiMortarBoard, TiPen, TiTrash } from "react-icons/ti";
import { DataWithId } from "../../hooks/useCVDataBlock";

type Props={
    values: DataWithId<IEducation>,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowEducation({ values, onRemuve, onEdit }: Props) {
    // const { id, title, degree, grade, start, end, fieldOfStudy }=values.data
    const data = values.data
    const id = values.id
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__icon">
                <TiMortarBoard size={'2.3rem'} />
            </div>
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {data?.title||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text" >
                    {data?.degree||""}•{data?.fieldOfStudy||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    •{data?.grade||""}
                </div>
            </div>
            <div className="CVDataBlok__btnGrup">
                <button
                    className="CVDataBlok__btn"
                    type='button'
                    onClick={() => { onEdit(id) }}
                >
                    <TiPen size={'1.3rem'} />
                </button>
                <button
                    className="CVDataBlok__btn"
                    type='button'
                    onClick={() => {
                        onRemuve(id)
                    }}
                >
                    <TiTrash size={'1.3rem'} />
                </button>
            </div>

        </div>
    );
}