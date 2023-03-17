import { ITag } from "../../../models/Icv";
import '../../../scss/components/Row.scss'
import { TiPen, TiTrash } from "react-icons/ti";
import { DataWithId } from "../../../hooks/useCVDataBlock";

type Props={
    values: DataWithId<ITag>,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowTag({ values, onRemuve, onEdit }: Props) {
    const data =values.data
    const id = values.id
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {data?.title||""}
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