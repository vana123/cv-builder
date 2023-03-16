import { ISocial } from "../../models/Icv";
import '../../scss/components/Row.scss'
import { TiPen, TiTrash } from "react-icons/ti";

type Props={
    values: ISocial,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowSocial({ values, onRemuve, onEdit }: Props) {
    const { id, title, href, text }=values
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {title||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    {text||""}
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